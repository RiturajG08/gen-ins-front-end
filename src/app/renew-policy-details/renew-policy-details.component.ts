import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RenewService } from '../renew.service';

@Component({
  selector: 'app-renew-policy-details',
  templateUrl: './renew-policy-details.component.html',
  styleUrls: ['./renew-policy-details.component.css']
})
export class RenewPolicyDetailsComponent {

  renewalBuyPolicy: RenewalBuyPolicy = new RenewalBuyPolicy();
  constructor(private service: RenewService ,private router: Router) { }

  renewExistingPolicy(){
    this.renewalBuyPolicy.pid= parseInt(sessionStorage.getItem('policyId'));
    this.service.renewPolicy(this.renewalBuyPolicy).subscribe(data =>{
      alert(JSON.stringify(data));
    })
  } 
}

export class RenewalBuyPolicy{
  type: string;
  number: String;
  period: String;
  pid: number;
}

