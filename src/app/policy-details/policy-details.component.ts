import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.css']
})
export class PolicyDetailsComponent implements OnInit {

  type: string;
  vehicleNumber: string;
  startDate: string;
  endDate: string;
  idv: number;
  premium: number;
  totalIdv :number;
  period :string;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.type= sessionStorage.getItem('policyType')
    this.vehicleNumber= sessionStorage.getItem('vehicleNumber');
    this.startDate= sessionStorage.getItem('policyStartDate');
    this.endDate= sessionStorage.getItem('policyEndDate');
    this.idv= parseInt(sessionStorage.getItem('policyEachYearIdv'));
    this.totalIdv= parseInt(sessionStorage.getItem('policyTotalIdv'));
    this.premium= parseInt(sessionStorage.getItem('policyPremium'));
    this.period= sessionStorage.getItem('policyPeriod');
  }

  moveToPayment(){
    this.router.navigateByUrl("payment");
  }

}

