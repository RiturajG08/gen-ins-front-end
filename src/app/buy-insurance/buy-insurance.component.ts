import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Customer } from '../customer-register/customer-register.component';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'buy-insurance',
  templateUrl: './buy-insurance.component.html',
  styleUrls: ['./buy-insurance.component.css']
})
export class BuyInsuranceComponent implements OnInit {

  vehicle:  Vehicle= new Vehicle();
  vehicleId: string;
  constructor(private service: VehicleService, private router: Router) { }

  ngOnInit(): void {
  }

  registerVehicle(){
    this.vehicle.customer.id= parseInt(sessionStorage.getItem('customerId'));
    this.service.register(this.vehicle).subscribe(data =>{
      alert(JSON.stringify(data));
      this.vehicleId= data['registerVihicleId'];
      sessionStorage.setItem('vehicleId', this.vehicleId);
    })
  }
}

export class Vehicle{
 id:number;
 type: String;
 number: String;
 price: number;
 registrationDate: Date;
 engineNumber: String;
 drivingLicense: String;
 chassisNumber: String;
 model: String;
 manufacturer: String;
 customer: Customer= new Customer();
}