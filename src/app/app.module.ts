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
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { PolicyComponent } from './policy/policy.component';
import { EstimateInsuranceComponent } from './estimate-insurance/estimate-insurance.component';
import { PolicyDetailsComponent } from './policy-details/policy-details.component';

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
    CustomerRegisterComponent,
    WelcomeComponent,
    PolicyComponent,
    EstimateInsuranceComponent,
    PolicyDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
