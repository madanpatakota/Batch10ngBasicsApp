import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*string interpolation*/
    ProjectName = "Angular";
    title       = "Basics App";

    getCustomerName(){
       return "Robert.Jr";
    }


    /*Property Data Binding*/
    CustomerRole = "Admin";
    inputType    = "checkbox";
    disabled     = true;



    /*event Data Binding*/
    /*how to capture the key board events*/
    captureData($eventDetails:KeyboardEvent){
       //console.log("Keypress event fired");
       //console.log($eventDetails);
       //console.log($eventDetails.target);

      var htmlInputEl = $eventDetails.target as HTMLInputElement; 
      console.log(htmlInputEl.value);
    }

    btnClick(){
       console.log("Button fired");
      //  window.alert("Message is".concat(this.ProjectName));
    }

    /*  Handling the Event Data binding and Property Data binding together in same element */
    cusPeterLocation = "London";

    evtCusLocationKeyUp($eventDetails:KeyboardEvent){
     var htmlInputEl = $eventDetails.target as HTMLInputElement; 
     console.log(htmlInputEl.value);

     this.cusPeterLocation = htmlInputEl.value;

   }


   cusJohnLocation = "New yark";

   evtCusLocationModelChange($event:string){
    
       //parseInt($event)

       /*Trying to update the Customer Location By ngModel*/
       this.cusJohnLocation = $event;
   }



   
    /*Two Way Databinding  = propertydatabidning + event databinding*/


}


// now i want to create my own component and i want to set my own component as a startup component
//component is nothing but .html , .ts  , .css 
