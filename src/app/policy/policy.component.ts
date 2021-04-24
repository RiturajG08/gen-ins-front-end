import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  policyDto: PolicyDto= new PolicyDto();
  policyId: string;
  
  constructor(private router: Router, private service: PolicyService) { }

  ngOnInit(): void {
  }

  addPolicy(){
    this.policyDto.cid= parseInt(sessionStorage.getItem('customerId'));
    this.policyDto.vid= parseInt(sessionStorage.getItem('vehicleId'));
    this.policyDto.did= parseInt(sessionStorage.getItem('depreciationId'));
    this.service.addPolicy(this.policyDto).subscribe(data =>{
     alert(JSON.stringify(data));
     this.policyId = data['policyId'];
     sessionStorage.setItem('policyId',this.policyId);
     //this.router.navigate(['policy-details']);
     
   })
  }


}

export class PolicyDto{
  type: String;
  period: String;
  startDate: String;
  did: number;
  vid: number;
  cid: number;
}
