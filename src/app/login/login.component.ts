import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  login: Login = new Login();
  message: String;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  loginCheck() {
    console.log(this.login);
    this.customerService.login(this.login).subscribe(response => {
      alert(JSON.stringify(response));
      console.log(response);
      if(response.status == true) {
        let customerId = response.customerId;
        let customerName = response.name;
        sessionStorage.setItem('customerId', String(customerId));
        sessionStorage.setItem('customerName', customerName);
        this.router.navigate(['']);
      }
      else
        this.message = response.message;
    })
  }

}

export class Login {
  email: String;
  password: String;
}
