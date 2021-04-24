import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminDto, Claim, RejectClaim} from './admin/admin.component';
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

  viewAllClaims(): Observable<Claim>{
    let url ="http://localhost:8484/searchAllClaims";
    return this.http.get<Claim>(url);
  }

  approveClaim(adminDto: AdminDto): Observable<object>{
    let url ="http://localhost:8484/approvedClaim";
    return this.http.post(url,adminDto);
  }

  rejectClaim(rejectClaim: RejectClaim) : Observable<object>{
    let url ="http://localhost:8484/rejectedClaim";
    return this.http.post(url,rejectClaim);
  }
  
}
