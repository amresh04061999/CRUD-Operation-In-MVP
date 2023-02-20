import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Contact } from '../contact.model';

@Injectable()
export class DataCommunicationService {
  public viewcontact:BehaviorSubject<any>
  public  viewcontact$:Observable<Contact>
  constructor() { 
    this.viewcontact= new BehaviorSubject('');
    this.viewcontact$=new Observable()
    this.viewcontact$=this.viewcontact.asObservable()
  }
}
