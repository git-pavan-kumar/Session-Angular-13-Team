import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { HomeComponent } from './components/home/home.component';
import { HttpCustomerDetailsComponent } from './components/http-customer-details/http-customer-details.component';
import { LoginComponent } from './components/login/login.component';
import { NormalOrderComponent } from './components/normal-order/normal-order.component';
import { OrderComponent } from './components/order/order.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PremiumOrderComponent } from './components/premium-order/premium-order.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'customers', component: CustomerDetailsComponent },
  { path: 'httpCustomers', component: HttpCustomerDetailsComponent },
  { path: 'orders', component: OrderComponent,
                    children: [
                        { path: '', redirectTo: 'child-one-normal', pathMatch: 'full' },
                        { path: 'child-one-normal', component: NormalOrderComponent},
                        { path: 'child-two-premium', component:  PremiumOrderComponent} 
                    ] },
  { path: 'analysis', loadChildren: () => import('./components/analytics-module/analytics-module.module').
                                                  then(m => m.AnalyticsModuleModule)},
  { path: 'contactUs', component: ContactUsComponent },  
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
