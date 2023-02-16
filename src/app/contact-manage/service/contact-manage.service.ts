import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../contact.model';

@Injectable()
export class ContactManageService {
  baseURL: any;
  constructor(private contactHttp:HttpClient) { 
    this.baseURL = environment.baseURL;
  }

  /**
   *  add employee service
   * @param contact
   * @returns array
   */
  addContact(contact:Contact): Observable<Contact> {
    const URL: string = `${this.baseURL}contact`;
    return this.contactHttp.post<Contact>(URL, contact);
  }
}
