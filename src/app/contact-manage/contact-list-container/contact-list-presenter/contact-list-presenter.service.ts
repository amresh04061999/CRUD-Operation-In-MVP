import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Contact } from '../../contact.model';
import { DataCommunicationService } from '../../service/data-communication.service';

@Injectable()
export class ContactListPresenterService {
  private delete: Subject<number>;
  public delete$: Observable<number>;
  private viewContact: Subject<Contact>;
  public viewContact$: Observable<Contact>;
  constructor( private _communicationService:DataCommunicationService) {
    this.viewContact = new Subject();
    this.viewContact$ = new Observable();
    this.viewContact$ = this.viewContact.asObservable();
    this.delete = new Subject();
    this.delete$ = new Observable();
    this.delete$ = this.delete.asObservable();
  }
  /**
   * Delete Contact
   * @param id
   */
  public deleteContact(id: number):void {
    this.delete.next(id);
  }
  /**
   * view contact Details logic
   * @param id 
   */
  public viewContactDetails(list:Contact,contactList:any):void{
    contactList.find((items: any) => {
      if (items.id == list.id) {
        const viewContact = items;
      this._communicationService.viewContact.next(viewContact);
      }
    });
  }
}
