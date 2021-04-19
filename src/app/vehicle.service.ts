import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from './buy-insurance/buy-insurance.component';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  register(vehicle: Vehicle): Observable<object>{
    let url= "http://localhost:8383/calculater";
    return this.http.post(url, vehicle);
  }  

  
}
