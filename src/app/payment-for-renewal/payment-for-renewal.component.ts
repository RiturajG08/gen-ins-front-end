import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-payment-for-renewal',
  templateUrl: './payment-for-renewal.component.html',
  styleUrls: ['./payment-for-renewal.component.css']
})
export class PaymentForRenewalComponent implements OnInit {

  policy1: Policy1 =new Policy1();
  constructor(private service : PolicyService, private router: Router ) { }

  ngOnInit(): void {

  }

  buyRenewalPolicy(){
  this.policy1.id=parseInt(sessionStorage.getItem('policyId'));
  this.policy1.premium=parseInt(sessionStorage.getItem('policyPremium'));
  this.policy1.totalIdv=parseInt(sessionStorage.getItem('policyEachYearIdv'));
  this.policy1.eachYearIdv=parseInt(sessionStorage.getItem('policyTotalIdv'));
  this.policy1.type=sessionStorage.getItem('policyType');
  this.policy1.period=sessionStorage.getItem('policyPeriod');
  
  this.service.renewService(this.policy1).subscribe(data=>{
    alert(JSON.stringify(data));
  })

  }
}

export class Policy1{
id: number;
premium: number;
eachYearIdv: number;
totalIdv: number;
type: string;
period: string;
}
