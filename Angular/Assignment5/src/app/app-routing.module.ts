import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { HomeComponent } from './components/home/home.component';
import { HttpCustomerDetailsComponent } from './components/http-customer-details/http-customer-details.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'customers',
    component: CustomerDetailsComponent
  },
  {
    path: 'httpCustomers',
    component: HttpCustomerDetailsComponent
  },
  {
    path: 'contactUs',
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
