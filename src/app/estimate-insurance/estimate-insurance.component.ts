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

  getpremium(){
    if(this.age<=1){
          this.drep=this.price*0.1;
          this.idv=this.price-this.drep;
          this.premium=this.idv*4/100;
    }
    if(this.age>=2 && this.age<3){
      this.drep=this.price*0.2;
      this.idv=this.price-this.drep;
      this.premium=this.idv*4/100;
    }
    if(this.age>=3 && this.age<4){
      this.drep=this.price*0.3;
      this.idv=this.price-this.drep;
      this.premium=this.idv*4/100;
    }
    else if(this.age>4){
      this.drep=this.price*0.5;
      this.idv=this.price-this.drep;
      this.premium=this.idv*4/100;
    }
  }
  
}
