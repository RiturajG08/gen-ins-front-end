import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }

  loggedUserId:String = null;

  ngOnInit(): void {
    this.loggedUserId = sessionStorage.getItem("customerId");
  }

  onBuyClick(){
    this.router.navigateByUrl("/buy-insurance");
  }

  onRenewClick(){
    this.router.navigateByUrl("/renew-insurance");
  }

  onClaimClick(){
      this.router.navigateByUrl("/claim-insurance");
    }

  /*onCalculateClick(){
    this.router.navigateByUrl("/calculate-premium");
  }*/
}