import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PolicyDto } from './policy/policy.component';
import { PolicyDetailsDto } from './policy-details/policy-details.component';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http: HttpClient) { }

  addPolicy(policyDto: PolicyDto): Observable<object>{
    let url= "http://localhost:8484/policy";
    return this.http.post(url, policyDto);
  }  

  viewPolicy(policyDetailsDto: PolicyDetailsDto): Observable<object>{
    let url= "http://localhost:8484/searchPolicy";
    return this.http.post(url,policyDetailsDto);
  }
}
