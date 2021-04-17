import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CustomerService } from '../customer.service';
@Component({
  selector: 'customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

  customer: Customer= new Customer();
  constructor(private service: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  registerCustomer(){
    this.service.register(this.customer).subscribe(data =>{
      alert(JSON.stringify(data));
    })
  }

}

export class Customer{
  name: String;
  email: String;
  password: String;
  dateOfBirth: String;
  address: String;
  city: String;
  state: String;
  pincode: number;
  mobileNumber: number;
}