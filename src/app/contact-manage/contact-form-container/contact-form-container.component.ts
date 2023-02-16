import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../contact.model';
import { ContactManageService } from '../service/contact-manage.service';

@Component({
  selector: 'app-contact-form-container',
  templateUrl: './contact-form-container.component.html',
  styleUrls: ['./contact-form-container.component.scss']
})
export class ContactFormContainerComponent {
  
  public addcontact$:Observable<Contact>
  constructor(private contactHttpServices:ContactManageService){
    this.addcontact$=new Observable();

  }
  
  public createContact(contact:Contact){
    this.contactHttpServices.addContact(contact).subscribe(Response=>{
      console.log(Response);
    })
  }
}
