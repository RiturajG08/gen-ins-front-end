import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.css']
})
export class PolicyDetailsComponent implements OnInit {

  policyDetailsDto : PolicyDetailsDto = new PolicyDetailsDto();

  policyNumber:number;
  startDate: string;
  endDate: string;
  idv: number;
  premium: number;
  totalIdv :number;

  constructor(private policyService: PolicyService, private router: Router) { }

  ngOnInit(): void {
  }

  showPolicyDetails(){
   this.policyDetailsDto.pid = parseInt(sessionStorage.getItem('policyId'));
   this.policyService.viewPolicy(this.policyDetailsDto).subscribe(response =>{
   this.policyNumber = response['policyNumber'];
   this.startDate = response['startDate'];
   this.endDate = response['endDate'];
   this.idv = response['idv'];
   this.premium = response['premium'];
   this.totalIdv = response['totalIdv'];
   }) 
  }

}

export class PolicyDetailsDto{
  pid: number;

}
