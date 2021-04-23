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
  depreciationDto: DepreciationDto= new DepreciationDto();
  vehicleId: string;
  DepreciationId: string;
  constructor(private service: VehicleService, private router: Router) { }

  ngOnInit(): void {
  }

  registerVehicle(){
    this.vehicle.customer.id= parseInt(sessionStorage.getItem('customerId'));
    this.service.addVehicle(this.vehicle).subscribe(data =>{
      alert(JSON.stringify(data));
      this.vehicleId= data['registerVihicleId'];
      sessionStorage.setItem('vehicleId', this.vehicleId); 
    })
    this.router.navigateByUrl('/policy');
  }

  /*addDepreciation(){
    this.depreciationDto.id=parseInt(sessionStorage.getItem('vehicleId'));
    this.service.addDepreciation(this.depreciationDto).subscribe(response =>{
       alert(JSON.stringify(response));
       
       this.DepreciationId= response['depreciationId'];
       sessionStorage.setItem('DepreciationId', this.DepreciationId);
    })
  }*/
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

export class DepreciationDto{
  id: number;
}