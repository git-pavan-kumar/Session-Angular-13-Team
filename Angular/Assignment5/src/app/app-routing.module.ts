import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { HttpCustomerDetailsComponent } from './components/http-customer-details/http-customer-details.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NormalOrderComponent } from './components/normal-order/normal-order.component';
import { OrderComponent } from './components/order/order.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PremiumOrderComponent } from './components/premium-order/premium-order.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'customers', component: CustomerDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'httpCustomers', component: HttpCustomerDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'orders', component: OrderComponent, canActivate: [AuthGuardService], canLoad: [AuthGuardService],
                    children: [
                        { path: '', redirectTo: 'child-one-normal', pathMatch: 'full', canActivateChild: [AuthGuardService] },
                        { path: 'child-one-normal', component: NormalOrderComponent, canActivateChild: [AuthGuardService] },
                        { path: 'child-two-premium', component:  PremiumOrderComponent, canActivateChild: [AuthGuardService] } 
                    ] },
  { path: 'analysis', loadChildren: () => import('./components/analytics-module/analytics-module.module').
                                                  then(m => m.AnalyticsModuleModule)},
  { path: 'feedback', component: FeedbackComponent, canActivate: [AuthGuardService] },
  { path: 'contactUs', component: ContactUsComponent, canActivate: [AuthGuardService] },  
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
