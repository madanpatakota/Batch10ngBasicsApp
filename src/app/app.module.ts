import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { testComponent } from './test/test.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component'; 


@NgModule({
  declarations: [
    AppComponent,
    testComponent,
    CustomerSignupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
