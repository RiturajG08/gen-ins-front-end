import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClaimService } from '../claim.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 claim: Claim = new Claim();
 
  constructor(private claimService: ClaimService ,private router: Router) { }

  ngOnInit(): void {
    this.all();
    
  }
  claimData: any;

  all(){
    this.claimService.viewAllClaims().subscribe(data=>{
      //alert(JSON.stringify(data));
      this.claimData = data;
    })
  }

  approveClaim(id: number, amount: number){
    this.claimService.approveClaim(id,amount).subscribe(response=>{
      alert(JSON.stringify(response));
    })
  }
    
}

export class Claim{
  id:number;
  claimDate: Date;
  reason: String; 
}