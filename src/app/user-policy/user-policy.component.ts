import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClaimService } from '../claim.service';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-user-policy',
  templateUrl: './user-policy.component.html',
  styleUrls: ['./user-policy.component.css']
})
export class UserPolicyComponent implements OnInit {

  cid:number;
  policyData: any;
  claimData: any;
  policyNumber: string;
  status:number=0;
  claimNumber:number;
  

  constructor(private router: Router, private service: PolicyService, private claimservice: ClaimService) { }

  ngOnInit(): void {
    this.viewPolicy();
    this.viewClaim();
  }

  viewPolicy() {
    this.cid = parseInt(sessionStorage.getItem('customerId'));
    this.service.viewUserPolicy(this.cid).subscribe(data=>{
      this.policyData=data;
    })

  }

  viewClaim() {
    this.claimservice.viewUserClaim(this.claimNumber).subscribe(response=>{
      this.claimData=response;
    })
}

}