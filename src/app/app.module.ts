import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { testComponent } from './test/test.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component'; 
import { FormsModule } from '@angular/forms';
import { BasicsComponent } from './basics/basics.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { CompCComponent } from './comp-c/comp-c.component';


@NgModule({
  declarations: [
    AppComponent,
    testComponent,
    CustomerSignupComponent,
    BasicsComponent,
    CompAComponent,
    CompBComponent,
    CompCComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
