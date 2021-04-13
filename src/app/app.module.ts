import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RenewInsuranceComponent } from './renew-insurance/renew-insurance.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { HomeComponent } from './home/home.component';
import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HelpComponent } from './help/help.component';
import { FaqComponent } from './faq/faq.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RenewInsuranceComponent,
    ClaimInsuranceComponent,
    HomeComponent,
    BuyInsuranceComponent,
    LoginComponent,
    ContactUsComponent,
    AboutUsComponent,
    HelpComponent,
    FaqComponent,
    CustomerRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
