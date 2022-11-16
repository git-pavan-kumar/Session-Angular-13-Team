import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestPipePipe } from './filters/test-pipe.pipe';
import { HttpCustomerDetailsComponent } from './components/http-customer-details/http-customer-details.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    TestPipePipe,
    HttpCustomerDetailsComponent,
    HighlightDirective,
    HomeComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
