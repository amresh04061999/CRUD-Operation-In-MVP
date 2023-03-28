import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contact } from '../contact.model';

@Injectable()
export class DataCommunicationService {
  public viewContact:BehaviorSubject<any>
  public  viewContact$:Observable<Contact>
  constructor() { 
    this.viewContact= new BehaviorSubject('');
    this.viewContact$=new Observable()
    this.viewContact$=this.viewContact.asObservable()
  }
}
