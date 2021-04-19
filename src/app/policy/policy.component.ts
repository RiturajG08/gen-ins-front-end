import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  policy: Policy= new Policy();
  constructor() { }

  ngOnInit(): void {
  }
}

export class Policy{
  type: String;
  startDate: String;
}
