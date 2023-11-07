import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})

//var                           name        : string = "John";
export class CompBComponent {

  /*ViewChild*/
  @ViewChild('CustomerName')  vCustomerName : ElementRef<any>;

  // btnClick(CustomerName : HTMLInputElement){
  //   console.log(CustomerName.value);
  // }

  displayName = '';

  btnVClick(){
    //console.log(this.vCustomerName);
    //console.log(this.vCustomerName.nativeElement.value);
    this.displayName =  this.vCustomerName.nativeElement.value
  }






/*ContentChild*/
@ContentChild("CusLocation")  vCustomerLocation : ElementRef<any>;
@ContentChild("JobTitle")  vCustomerJOB : ElementRef<any>;



displayCName  = "";
displayCJOB   = "";
  btnCClick(){
    this.displayCName =  this.vCustomerLocation.nativeElement.value;


    this.displayCJOB =  this.vCustomerJOB.nativeElement.value


  }





}
