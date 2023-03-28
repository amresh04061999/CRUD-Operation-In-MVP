import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Contact } from '../../contact.model';

@Injectable()
export class ContactListPresenterService {
  private delete: Subject<number>;
  public delete$: Observable<number>;
  private viewContact: Subject<Contact>;
  public viewContact$: Observable<Contact>;
  constructor() {
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
  public deleteContact(id: number) {
    this.delete.next(id);
  }
}
