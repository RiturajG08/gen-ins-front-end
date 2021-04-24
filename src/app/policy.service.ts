import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PolicyDto } from './policy/policy.component';
import { Policy } from './payment/payment.component';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http: HttpClient) { }

  addPolicy(policy: Policy): Observable<object>{
    let url= "http://localhost:8484/policy";
    return this.http.post(url, policy);
  }  

  seePolicyDetails(policyDto: PolicyDto): Observable<object>{
    let url= "http://localhost:8484/policydetails";
    return this.http.post(url, policyDto );
  }
}
