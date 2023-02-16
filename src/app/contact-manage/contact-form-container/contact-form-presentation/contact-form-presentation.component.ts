import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { ContactFormPresenterService } from '../contact-form-presenter/contact-form-presenter.service';
import { AbstractControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-contact-form-presentation',
  templateUrl: './contact-form-presentation.component.html',
  styleUrls: ['./contact-form-presentation.component.scss'],
  viewProviders:[ContactFormPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ContactFormPresentationComponent {
  public contactForm:FormGroup;
  public isSubmited:boolean;
  constructor(private contactPresenter:ContactFormPresenterService){
    this.isSubmited=false
    this.contactForm=this.contactPresenter.BuildForm();
  }

  // 
  public saveContact():void{
    if( this.isSubmited=true){
      console.log("submited")
    }
  }
  // Select data employe form
  get formValidator(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }
  
  // Reset form
  public formReset(){
          this.isSubmited=false
          this.contactForm.reset()
  }

}
