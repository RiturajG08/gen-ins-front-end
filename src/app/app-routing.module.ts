import {​​​​​ NgModule }​​​​​ from'@angular/core';
import {​​​​​ RouterModule, Routes }​​​​​ from'@angular/router';
import {​​​​​ AboutUsComponent }​​​​​ from'./about-us/about-us.component';
import {​​​​​ BuyInsuranceComponent }​​​​​ from'./buy-insurance/buy-insurance.component';
import {​​​​​ ClaimInsuranceComponent }​​​​​ from'./claim-insurance/claim-insurance.component';
import {​​​​​ ContactUsComponent }​​​​​ from'./contact-us/contact-us.component';
import {​​​​​ CustomerRegisterComponent }​​​​​ from'./customer-register/customer-register.component';
import { EstimateInsuranceComponent } from './estimate-insurance/estimate-insurance.component';
import {​​​​​ FaqComponent }​​​​​ from'./faq/faq.component';
import {​​​​​ HelpComponent }​​​​​ from'./help/help.component';
import {​​​​​ HomeComponent }​​​​​ from'./home/home.component';
import {​​​​​ LoginComponent }​​​​​ from'./login/login.component';
import { PolicyDetailsComponent } from './policy-details/policy-details.component';
import { PolicyComponent } from './policy/policy.component';
import {​​​​​ RenewInsuranceComponent }​​​​​ from'./renew-insurance/renew-insurance.component';

const routes: Routes = [
  {​​​​​path:'', component:HomeComponent}​​​​​,
  {​​​​​path:'login', component:LoginComponent}​​​​​,
  {​​​​​path:'buy-insurance', component:BuyInsuranceComponent}​​​​​,
  {​​​​​path:'renew-insurance', component:RenewInsuranceComponent}​​​​​,
  {​​​​​path:'claim-insurance', component:ClaimInsuranceComponent}​​​​​,
  {​​​​​path:'about-us', component:AboutUsComponent}​​​​​,
  {​​​​​path:'help', component:HelpComponent}​​​​​,
  {​​​​​path:'contact-us', component:ContactUsComponent}​​​​​,
  {​​​​​path:'faq', component:FaqComponent}​​​​​,
  {​​​​​path:'customer-register', component:CustomerRegisterComponent},​​​​​
  {path:'policy', component:PolicyComponent},
  {path:'estimate-insurance', component:EstimateInsuranceComponent},
  {path:'policy-details',component:PolicyDetailsComponent}

];

@NgModule({​​​​​
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
}​​​​​)
export class AppRoutingModule {​​​​​ }​​​​​
