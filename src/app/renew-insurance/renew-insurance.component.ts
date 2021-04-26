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
  policyId: string;
  constructor(private service: RenewService, private router: Router) { }

  ngOnInit(): void {
  }

  checkPolicy(){
    this.service.checkPolicy(this.renewal).subscribe(data =>{
     //alert(JSON.stringify(data));
     this.policyId = data['policyId'];
     sessionStorage.setItem('policyId',this.policyId);
     if(data['status']== true){
      this.router.navigate(['renew-policy-details']);
     }
   })
  }

}

export class Renewal{
  id: number;
}
