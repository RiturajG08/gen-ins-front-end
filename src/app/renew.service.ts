import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Renewal } from './renew-insurance/renew-insurance.component';
import { RenewalBuyPolicy } from './renew-policy-details/renew-policy-details.component';

 


@Injectable({
  providedIn: 'root'
})
export class RenewService {

  constructor(private http: HttpClient) { }
  checkPolicy(renewal: Renewal): Observable<object>{
    let url= "http://localhost:8484/renewal";
    return this.http.post(url, renewal);
  }  

  renewPolicy(renewalBuyPolicy: RenewalBuyPolicy): Observable<object>{
    let url= "http://localhost:8484/renewalpolicy";
    return this.http.post(url, renewalBuyPolicy);
  }
}
