import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../buy-insurance/buy-insurance.component';
import { Customer } from '../customer-register/customer-register.component';
import { DepreciationComponent } from '../depreciation/depreciation.component';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  policy: Policy= new Policy();
  constructor(private router: Router, private service: PolicyService) { }

  ngOnInit(): void {
  }

  buyPolicy(){
    this.policy.customer.id= parseInt(sessionStorage.getItem('customerId'));
    this.policy.vehicle.id= parseInt(sessionStorage.getItem('vehicleId'));
    this.policy.depreciation.id= parseInt(sessionStorage.getItem('depreciationId'));
    this.policy.type= sessionStorage.getItem('policyType');
    this.policy.period= sessionStorage.getItem('policyPeriod');
    this.policy.premium= parseInt(sessionStorage.getItem('policyPremium'));
    this.policy.eachYearIdv= parseInt(sessionStorage.getItem('policyEachYearIdv'));
    this.policy.totalIdv= parseInt(sessionStorage.getItem('policyTotalIdv'));

    this.service.addPolicy(this.policy).subscribe(data =>{
      alert(JSON.stringify(data));
    })
    this.router.navigateByUrl('');
  }
}

export class Policy{
  type: String;
  period: String;
  premium: number;
  eachYearIdv: number;
  totalIdv: number;
  customer: Customer=new Customer();
  vehicle: Vehicle= new Vehicle();
  depreciation: Depreciation= new Depreciation();
}

export class Depreciation{
  id: number;
}
