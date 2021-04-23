import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-renew-policy-details',
  templateUrl: './renew-policy-details.component.html',
  styleUrls: ['./renew-policy-details.component.css']
})
export class RenewPolicyDetailsComponent {

  renewalBuyPolicy: RenewalBuyPolicy = new RenewalBuyPolicy();
  constructor() { }

  addRenewPolicy(){

  } 
}

export class RenewalBuyPolicy{
  type: string;
  number: String;
  period: String;
  pid: number;
}

