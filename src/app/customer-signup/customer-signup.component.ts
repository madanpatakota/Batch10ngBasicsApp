import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent {
     
      divColor = 'red';

      changeColor(){
         this.divColor = 'green';
      }

      number = 1;

      constructor(){
         /* Ternary Operator : Simple way to handle the output based on the condition. */
         this.number == 1 ? console.log("one") : console.log("not one");
      }


  /*ngStyle */
  zoneSafeStatus   = true;
  zoneBorderStatus = true;
  zonemaxWidth     = true;

  greenColor = 'green';
  redColor   = 'red';





}
