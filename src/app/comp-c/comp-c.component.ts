import { 
  Component, 
  TemplateRef, 
  ViewChild 
} from '@angular/core';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css']
})
export class CompCComponent {


  @ViewChild('CustomerTemplate') vCustomerTemplate : TemplateRef<any>;
  displayCustomerTemplate: TemplateRef<any>;
  btnGetCustomerTemplate(){
    var customerTempalteRef = this.vCustomerTemplate;
    this.displayCustomerTemplate = customerTempalteRef;

    //console.log(this.vCustomerTemplate);

  }


}
