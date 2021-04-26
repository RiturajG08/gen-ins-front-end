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
  vehicleNumber: string;
  DepreciationId: string;
  depreciationAmount: string;
  idv: string;
  constructor(private service: VehicleService, private router: Router) { }

  ngOnInit(): void {
  }

  registerVehicle(){
    this.vehicle.customer.id= parseInt(sessionStorage.getItem('customerId'));
    this.service.addVehicle(this.vehicle).subscribe(data =>{
      this.vehicleId= data['registerVehicleId'];
      this.vehicleNumber= data['vehicleNumber'];
      this.DepreciationId= data['did'];
      this.depreciationAmount= data['depreciationAmount'];
      this.idv= data['idv'];

      sessionStorage.setItem('vehicleId', this.vehicleId); 
      sessionStorage.setItem('vehicleNumber', this.vehicleNumber); 
      sessionStorage.setItem('depreciationId', this.DepreciationId);
      sessionStorage.setItem('depreciationAmount', this.depreciationAmount);
      sessionStorage.setItem('idv', this.idv);
    })
    this.router.navigateByUrl('depreciation');
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