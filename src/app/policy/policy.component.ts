import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepreciationDto, Vehicle } from '../buy-insurance/buy-insurance.component';
import { Customer } from '../customer-register/customer-register.component';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  policy: Policy= new Policy();
  
  constructor(private router: Router, private service: PolicyService) { }

  ngOnInit(): void {
  }

  addPolicy(){
   this.policy.customer.id=parseInt(sessionStorage.getItem('customerId'));
   this.policy.vehicle.id=parseInt(sessionStorage.getItem('vehicleId'));
   this.service.addPolicy(this.policy).subscribe(data =>{
     alert(JSON.stringify(data));
   })
  }


}

export class Policy{
  public id: number;
  type: String;
  public period: String;
  startDate: String;
  customer: Customer= new Customer();
  vehicle: Vehicle= new Vehicle();
  depreciationDto: DepreciationDto= new DepreciationDto();
}
