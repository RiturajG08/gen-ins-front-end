import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'buy-insurance',
  templateUrl: './buy-insurance.component.html',
  styleUrls: ['./buy-insurance.component.css']
})
export class BuyInsuranceComponent implements OnInit {

  vehicle:  Vehicle= new Vehicle();
  constructor(private service: VehicleService, private router: Router) { }

  ngOnInit(): void {
  }

  registerVehicle(){
    this.service.register(this.vehicle).subscribe(data =>{
      alert(JSON.stringify(data));
    })
  }

}

export class Vehicle{
 type: String;
 number: String;
 price: number;
 registrationDate: Date;
 engineNumber: String;
 drivingLicense: String;
 chassisNumber: String;
 model: String;
 manufacturer: String;


}