import { Component } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../contact.model';
import { ContactManageService } from '../service/contact-manage.service';

@Component({
  selector: 'app-contact-form-container',
  templateUrl: './contact-form-container.component.html',
  styleUrls: ['./contact-form-container.component.scss']
})
export class ContactFormContainerComponent {
  public contactData$ : Observable<Contact>
  public id!:number
  constructor(private contactHttpServices: ContactManageService,
  private router:Router,private activeRouter:ActivatedRoute) {
    this.contactData$= new Observable();
    this.id=this.activeRouter.snapshot.params['id'];
    if(this.id){
        this.contactData$=this.contactHttpServices.getContactById(this.id)
    }
  }
  
  // Create contact 
  public createContact(contact:Contact){
    this.contactHttpServices.addContact(contact).subscribe((Response: Contact) => {
      this.router.navigateByUrl('contact-manage/contact-list')
    })
  }

  public editContact(contact:any){
    this.contactHttpServices.update(contact,this.id).subscribe((res:any)=>{
      this.router.navigateByUrl('contact-manage/contact-list')
     
    })
  }
}
