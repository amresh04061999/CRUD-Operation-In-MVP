import { Component, OnInit } from '@angular/core';
import { observable, Observable, Subject } from 'rxjs';
import { Contact } from '../contact.model';
import { ContactManageService } from '../service/contact-manage.service';

@Component({
  selector: 'app-contact-list-container',
  templateUrl: './contact-list-container.component.html',
  styleUrls: ['./contact-list-container.component.scss']
})
export class ContactListContainerComponent implements OnInit {
   public contactList$:Observable<Contact[]>
   public user :any
  constructor(private _contactHttpServices:ContactManageService){
      this.contactList$=new Observable();
  }
  ngOnInit(): void {
    /**
     * Get contact List 
     */
  //  this.contactList$=this._contactHttpServices.getContact();
   
   this.getUser()
  
  }

  public getUser(){
           this._contactHttpServices.getUser().subscribe(res =>{
            console.log(res)
            localStorage.setItem('users',JSON.stringify(res))
           })
  }
  /**
 * delete contact in json server using _contactHttpServices
 * @param contactId 
 */
  public deleteContact(contactId:number){
   this._contactHttpServices.delete(contactId).subscribe((Response:Contact[])=>{
    if(Response){
       /**
     * update contactList
     */
      this.contactList$=this._contactHttpServices.getContact()
    }
   
   })
  }
  
}
