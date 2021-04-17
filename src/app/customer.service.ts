import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer-register/customer-register.component'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  register(customer: Customer): Observable<object>{
    let url= "http://localhost:8484/register";
    return this.http.post(url, customer);
  }  


}
