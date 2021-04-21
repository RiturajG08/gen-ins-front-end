import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estimate-insurance',
  templateUrl: './estimate-insurance.component.html',
  styleUrls: ['./estimate-insurance.component.css']
})
export class EstimateInsuranceComponent  {

  public price: number;
  public age: number;
  public premium: number;
  public vmodel: string;
  public drep: number;
  public idv:number;
  public month: number;
  

  getpremium(){
    this.month=this.age*12;
    if(this.month<=12){
          this.drep=this.price*0.1;
          this.idv=this.price-this.drep;
          this.premium=this.idv*4/100;
    }
    if(this.month>12 && this.month<=24){
      this.drep=this.price*0.2;
      this.idv=this.price-this.drep;
      this.premium=this.idv*4/100;
    }
    if(this.month>24 && this.month<=36){
      this.drep=this.price*0.3;
      this.idv=this.price-this.drep;
      this.premium=this.idv*4/100;
    }
    else if(this.month>36){
      this.drep=this.price*0.5;
      this.idv=this.price-this.drep;
      this.premium=this.idv*4/100;
    }
  }
}
