import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RenewService } from '../renew.service';


@Component({
  selector: 'app-renew-insurance',
  templateUrl: './renew-insurance.component.html',
  styleUrls: ['./renew-insurance.component.css']
})
export class RenewInsuranceComponent implements OnInit {

  renewal: Renewal= new Renewal();

  constructor(private service: RenewService, private router: Router) { }

  ngOnInit(): void {
  }

  checkPolicy(){
    this.service.checkPolicy(this.renewal).subscribe(data =>{

     alert(JSON.stringify(data));
   })
  }

}

export class Renewal{
  id: number;
}
