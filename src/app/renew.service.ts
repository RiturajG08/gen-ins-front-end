import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Renew } from './renew-insurance/renew-insurance.component';


@Injectable({
  providedIn: 'root'
})
export class RenewService {

  constructor(private http: HttpClient) { }
  checkPolicy(renew: Renew): Observable<object>{
    let url= "http://localhost:8484/renewal";
    return this.http.post(url, renew);
  }  

}
