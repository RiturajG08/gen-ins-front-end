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
 adminDto: AdminDto= new AdminDto();
 rcl: RejectClaim= new RejectClaim();
 claimData: any;
 cid:number;
 
  constructor(private claimService: ClaimService ,private router: Router) { }

  ngOnInit(): void {
    this.all();
    
  }
  
  
  all(){
    this.claimService.viewAllClaims().subscribe(data=>{
      //alert(JSON.stringify(data));
      this.claimData = data;
    })
  }

  approveClaim(){
    this.claimService.approveClaim(this.adminDto).subscribe(response=>{
      alert(JSON.stringify(response));
    })
  }

  rejectClaim(){
    this.claimService.rejectClaim(this.rcl).subscribe(response=>{
      alert(JSON.stringify(response));
    })
  }
    
}

export class Claim{
  id:number;
  claimDate: Date;
  reason: String; 
}

export class AdminDto{
  cid: number;
  amount: number;
}

export class RejectClaim{
  rcid: number;
  rejectionReason: String;

}