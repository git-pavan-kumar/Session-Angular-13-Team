import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TestPipePipe } from './filters/test-pipe.pipe';
import { HttpCustomerDetailsComponent } from './components/http-customer-details/http-customer-details.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { OrderComponent } from './components/order/order.component';
import { NormalOrderComponent } from './components/normal-order/normal-order.component';
import { PremiumOrderComponent } from './components/premium-order/premium-order.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { NavModule } from './shared/nav/nav.module';
import { LogoutComponent } from './components/logout/logout.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    TestPipePipe,
    HttpCustomerDetailsComponent,
    HighlightDirective,
    HomeComponent,
    ContactUsComponent,
    OrderComponent,
    NormalOrderComponent,
    PremiumOrderComponent,
    PageNotFoundComponent,
    LoginComponent,
    LogoutComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NavModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
