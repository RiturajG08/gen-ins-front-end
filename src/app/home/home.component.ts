import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }

  loggedInUserId:String = null;
  loggedInUserName:String = null;

  ngOnInit(): void {
    this.loggedInUserId = sessionStorage.getItem("customerId");
    this.loggedInUserName = sessionStorage.getItem("customerName");
  } 

  onBuyClick(){

    if(this.loggedInUserId == null){
      this.router.navigateByUrl("/login");
    }
    else{
      this.router.navigateByUrl('/buy-insurance');
    }
    
  }

  onRenewClick(){

    if(this.loggedInUserId == null){
      this.router.navigateByUrl("/login");
    }
    else{
      this.router.navigateByUrl('/renew-insurance');
    }
    
  }

  onClaimClick(){

    if(this.loggedInUserId == null){
      this.router.navigateByUrl("/login");
    }
    else{
      this.router.navigateByUrl('/claim-insurance');
    }
    
    }

  onCalculateClick(){
      this.router.navigateByUrl('/estimate-insurance');
  }
}