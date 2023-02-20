import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Contact } from '../../contact.model';

@Injectable()
export class ContactListPresenterService {
// Service of delete
private delete : Subject<Contact>;
public delete$ : Observable<Contact>;
private viewcontact:Subject<Contact>
public  viewcontact$:Observable<Contact>
  constructor() { 
    this.viewcontact= new Subject();
    this.viewcontact$=new Observable()
    this.viewcontact$=this.viewcontact.asObservable()
     // Service of delete
     this.delete = new Subject();
     this.delete$ = new Observable();
     this.delete$ = this.delete.asObservable();
 
  }

  // delete contact next observable in pregentation
  public deleteContact(id:any){
   this.delete.next(id)
  }
}
