import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClaimService } from '../claim.service';

@Component({
  selector: 'claim-insurance',
  templateUrl: './claim-insurance.component.html',
  styleUrls: ['./claim-insurance.component.css']
})
export class ClaimInsuranceComponent implements OnInit {

  claimDto: ClaimDto = new ClaimDto();
  

  constructor(private claimService: ClaimService ,private router: Router) { }

  ngOnInit(): void {
  }
    addClaim(){
      this.claimService.addClaim(this.claimDto).subscribe(data=>{
        alert(JSON.stringify(data));
      })
    }
}

export class ClaimDto{
  pid: number;
  reason: String;
}


