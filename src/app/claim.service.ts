import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClaimDto } from './claim-insurance/claim-insurance.component';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private http: HttpClient) { }

    addClaim(claimDto: ClaimDto): Observable<object>{
      let url= "http://localhost:8484/claim";
      return this.http.post(url, claimDto);
  }
  
}
