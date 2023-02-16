import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../contact.model';
import { ContactManageService } from '../service/contact-manage.service';

@Component({
  selector: 'app-contact-form-container',
  templateUrl: './contact-form-container.component.html',
  styleUrls: ['./contact-form-container.component.scss']
})
export class ContactFormContainerComponent {
  
  constructor(private contactHttpServices: ContactManageService,
  private router:Router) {

  }
  
  //
  public createContact(contact:Contact){
    this.contactHttpServices.addContact(contact).subscribe((Response: Contact) => {
      this.router.navigateByUrl('contact-manage/contact-list')
      
    })
  }
}
