import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer-register/customer-register.component'
import { Login } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  register(customer: Customer): Observable<object>{
    let url= "http://localhost:8484/register";
    return this.http.post(url, customer);
  }  

  login(login: Login) : Observable<any> {
    let url = "http://localhost:8484/login";
   return this.http.post(url, login); 
  }


}
