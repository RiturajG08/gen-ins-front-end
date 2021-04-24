import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depreciation',
  templateUrl: './depreciation.component.html',
  styleUrls: ['./depreciation.component.css']
})
export class DepreciationComponent implements OnInit {

  vehicleNumber: string;
  depreciationAmount: number;
  idv: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.vehicleNumber= sessionStorage.getItem('vehicleNumber');
    this.depreciationAmount= parseInt(sessionStorage.getItem('depreciationAmount'));
    this.idv= parseInt(sessionStorage.getItem('idv'));
  }

  moveToPolicy(){
    this.router.navigateByUrl('policy');
  }
}
