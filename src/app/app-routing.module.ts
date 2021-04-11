import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RenewInsuranceComponent } from './renew-insurance/renew-insurance.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'buy-insurance', component: BuyInsuranceComponent},
  {path: 'renew-insurance', component: RenewInsuranceComponent},
  {path: 'claim-insurance', component: ClaimInsuranceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
