import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  policyDto: PolicyDto= new PolicyDto();
  
  constructor(private router: Router, private service: PolicyService) { }

  ngOnInit(): void {
  }

  addPolicy(){
  
   this.service.addPolicy(this.policyDto).subscribe(data =>{
     alert(JSON.stringify(data));
   })
  }


}

export class PolicyDto{
  type: String;
  period: String;
  startDate: String;
}
