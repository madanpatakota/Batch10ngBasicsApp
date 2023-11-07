import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent {
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


    /*ngClass */
    employeeStatus = true;


  /*ngIf */
  customerEligibility = true;


   /* Local reference */
  myAnswer = '';
  btnClick(question:HTMLParagraphElement){
      console.log(question);
      // <p class="text-danger">Hey !! How are you doing?</p>
      if(question.innerText == "Hey !! How are you doing?"){
         this.myAnswer  = "Yeah!!! i am Excellent....."
      }

  }


    /*   *ngFor   */
    customerExperience = [
      'He Likes the Non Veg Food',
      'He dislike in Reception the way they talk in Restaurent',
      'He went with his 4 freinds'
    ];

    //                 0           1
    //var names = [{_:__} , {__:___}]


    customersList = [
      { name: 'John Smith', location: 'London', Job: 'Sales Rep' },
      { name: 'Robert Frost', location: 'New yark', Job: 'Hotel Chef' },
      { name: 'Peter moore', location: 'Colombo', Job: 'Car Driver' },
    ];



    /*ngSwitch and ngSwitchCase*/
    customerID = 2;

}
