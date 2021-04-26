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

  policyId: string;
  eachYearIdv: string;
  totalIdv: string;
  premium: string;
  startDate: string;
  endDate: string;
  type:string;
  period: string;

  renewalBuyPolicy: RenewalBuyPolicy = new RenewalBuyPolicy();
  constructor(private service: RenewService ,private router: Router) { }

  renewExistingPolicy(){
    sessionStorage.setItem('vehiclenumber',this.renewalBuyPolicy.number);
    this.renewalBuyPolicy.pid= parseInt(sessionStorage.getItem('policyId'));
    this.service.renewPolicy(this.renewalBuyPolicy).subscribe(data =>{
      alert(JSON.stringify(data));

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

      this.router.navigateByUrl('show-renew-details');
    })
  } 
}

export class RenewalBuyPolicy{
  type: string;
  number: string;
  period: String;
  pid: number;
}

