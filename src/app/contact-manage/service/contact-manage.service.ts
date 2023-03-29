import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../contact.model';

@Injectable()
export class ContactManageService {
  baseURL: String;
  baseURL1: String;
  constructor(private _contactHttp:HttpClient) { 
    this.baseURL = environment.baseURL;
    this.baseURL1 = environment.baseURL1;
  }

  /**
   * add Contact in json-server
   * @param contact
   * @returns 
   */
  public addContact(contact:Contact): Observable<Contact> {
    return this._contactHttp.post<Contact>(`${this.baseURL}contact`, contact);
  }
/**
 *  get Contact details in json-server
 * @returns 
 */
  public getContact():Observable<Contact[]>{
    return this._contactHttp.get<Contact[]>(`${this.baseURL}contact`);
  }
  /**
 *  get Contact details in json-server
 * @returns 
 */
  public getUser():Observable<any>{
    return this._contactHttp.get<any>('https://dummyjson.com/users');
  }
/**
 * delete Contact Details in json-server
 * @param contactId 
 * @returns 
 */
  public delete(contactId:number):Observable<Contact[]>{
    return this._contactHttp.delete<Contact[]>(`${this.baseURL}contact/${contactId}`)

  }/**
   * contact details Update in json-server
   * @param contactID 
   * @param contact 
   * @returns 
   */
public update(contact:any,contactID:number):Observable<Contact>{
  return this._contactHttp.put<Contact>(`${this.baseURL}contact/${contactID}`,contact)
}
/**
 * get-Employee id in json-server
 * @param id 
 * @returns 
 */
  public getContactById(id: number): Observable<Contact> {
    return this._contactHttp.get<Contact>(`${this.baseURL}contact/${id}`)
}
}