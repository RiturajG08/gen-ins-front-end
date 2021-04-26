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
  eachYearIdv: string;
  totalIdv: string;
  premium: string;
  startDate: string;
  endDate: string;
  type:string;
  period: string;
  
  constructor(private router: Router, private service: PolicyService) { }

  ngOnInit(): void {
  }

  addPolicy(){
    this.policyDto.cid= parseInt(sessionStorage.getItem('customerId'));
    this.policyDto.vid= parseInt(sessionStorage.getItem('vehicleId'));
    this.policyDto.did= parseInt(sessionStorage.getItem('depreciationId'));
    this.service.seePolicyDetails(this.policyDto).subscribe(data =>{
      this.eachYearIdv= data['idv'];
      this.totalIdv= data['totalIdv'];
      this.premium= data['premium'];
      this.type= data['type'];
      this.startDate= data['startDate'];
      this.endDate= data['endDate'];
      this.period= data['period'];

      sessionStorage.setItem('policyType', this.type);
      sessionStorage.setItem('policyEachYearIdv', this.eachYearIdv);
      sessionStorage.setItem('policyTotalIdv', this.totalIdv);
      sessionStorage.setItem('policyPremium', this.premium);
      sessionStorage.setItem('policyStartDate', this.startDate);
      sessionStorage.setItem('policyEndDate', this.endDate);
      sessionStorage.setItem('policyPeriod', this.period);
    })
    this.router.navigateByUrl('policy-details');
  }
}

export class PolicyDto{
  type: String;
  period: String;
  did: number;
  vid: number;
  cid: number;
}
