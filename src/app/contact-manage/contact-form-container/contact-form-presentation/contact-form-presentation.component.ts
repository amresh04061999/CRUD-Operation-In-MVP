import { ChangeDetectionStrategy, EventEmitter, OnInit, Output } from '@angular/core';
import { Component } from '@angular/core';
import { ContactFormPresenterService } from '../contact-form-presenter/contact-form-presenter.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Contact } from '../../contact.model';
@Component({
  selector: 'app-contact-form-presentation',
  templateUrl: './contact-form-presentation.component.html',
  styleUrls: ['./contact-form-presentation.component.scss'],
  viewProviders:[ContactFormPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ContactFormPresentationComponent implements OnInit {
  public contactForm:FormGroup;
  public isSubmited: boolean;
  // output created addContact
  @Output() public addContact: EventEmitter<Contact>
  constructor(private contactPresenterServices:ContactFormPresenterService){
    this.isSubmited = false;
    // contact form
    this.contactForm = this.contactPresenterServices.BuildForm();
    this.addContact = new EventEmitter();
  }
  ngOnInit(): void {

    this.contactPresenterServices.addContact$.subscribe((res: Contact) => {
       this.addContact.emit(res)
    })
  }

  //  save contact  
  public saveContact() { 
      this.contactPresenterServices.submitData(this.contactForm)
  }



    public SelectImage(event:any){
      this.contactPresenterServices.selectImage(event)

      
    }
  // validation function
  get formValidator(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }
  
  // Reset form function
  public formReset(){
          this.isSubmited=false
          this.contactForm.reset()
  }

}
