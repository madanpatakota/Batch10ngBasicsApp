import { 
  Component, 
  TemplateRef, 
  ViewChild, 
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css']
})
export class CompCComponent {


  CustomerAmount = "20000";


  @ViewChild('CustomerTemplate') vCustomerTemplate : TemplateRef<any>;
  displayCustomerTemplate: TemplateRef<any>;
  btnGetCustomerTemplate(){
    var customerTempalteRef = this.vCustomerTemplate;
    this.displayCustomerTemplate = customerTempalteRef;

    //console.log(this.vCustomerTemplate);


  }









 

  // name : {} = "John"

  @ViewChild("container" , { read : ViewContainerRef} ) vContainer : ViewContainerRef;

  @ViewChild('CustomerLocationTemplate') vCustomerLocationTemplate : TemplateRef<any>;

  @ViewChild('CustomerAgeTemplate')
   vCustomerAgeTemplate : TemplateRef<any>;

   isTemplatetrue = false;

    // YOu have to insert | push | host |
    // deploy the ngtemplate into the ngcontainer
  // pen in box

  GenerateTemplate(){

    // I want to insert the template based on the conidtion
    // if condition is true then i want to show 
   //  Customer Location incase of fase i want to show Customer Age
   if(this.isTemplatetrue){
       // Show the CustomerLocation template
      this.vContainer.insert(this.vCustomerLocationTemplate.createEmbeddedView(null))
   }
   else{
     // Show Custoemr age template
        this.vContainer.insert(this.vCustomerAgeTemplate.createEmbeddedView(null))
   }


  }



  /*Target : i want to inser the ngtemplate into the containet with thedata)*/
  
  @ViewChild("Addresscontainer" , {read : ViewContainerRef} ) vAdressContainer : ViewContainerRef ;

  @ViewChild("CustomerAddressTemplate") vCustomerAddressTemplate : TemplateRef<any>;

  GenerateAdressTemplate(){

     this.vAdressContainer.insert(this.vCustomerAddressTemplate.
      createEmbeddedView(
        { "Address" : 'HSRLayOut' }
        ))


  }









}
