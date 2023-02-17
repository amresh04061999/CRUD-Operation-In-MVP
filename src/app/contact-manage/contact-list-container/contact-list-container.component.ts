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

   public conatctList$:Observable<Contact[]>
  constructor(private _contactHttpServices:ContactManageService){
      this.conatctList$=new Observable();
  }
  ngOnInit(): void {
   this.conatctList$=this._contactHttpServices.getContact()
  }

  // Delete conatact 
  public deletecontact(contactId:any){
   this._contactHttpServices.delete(contactId).subscribe((Response=>{
    // Update contactlist 
    this.conatctList$=this._contactHttpServices.getContact()
   }))
  }
  
}
