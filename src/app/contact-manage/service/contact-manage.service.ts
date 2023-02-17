import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../contact.model';

@Injectable()
export class ContactManageService {
  baseURL: any;
  constructor(private _contactHttp:HttpClient) { 
    this.baseURL = environment.baseURL;
  }

  /**
   *  add employee service
   * @param contact
   * @returns array
   */
  public addContact(contact:Contact): Observable<Contact> {
    const URL: string = `${this.baseURL}contact`;
    return this._contactHttp.post<Contact>(URL, contact);
  }
/**
 *  get services
 * @returns 
 */
  public getContact():Observable<Contact[]>{
    const URL: string = `${this.baseURL}contact`;
    return this._contactHttp.get<Contact[]>(URL);
  }
/**
 * delete services
 * @param contactId 
 * @returns 
 */
  public delete(contactId:number):Observable<Contact[]>{
    const URL: string = `${this.baseURL}contact/${contactId}`;
    return this._contactHttp.delete<Contact[]>(URL)

  }/**
   * Update sevices
   * @param contactID 
   * @param contact 
   * @returns 
   */
public update(contactID:number,contact:any):Observable<Contact>{
  const URL: string = `${this.baseURL}contact/${contactID}`;
  return this._contactHttp.put<Contact>(URL,contact)
}
/**
 * 
 * @param id 
 * @returns 
 */
  public getContactById(id: number): Observable<Contact> {
    const URL: string = `${this.baseURL}contact/${id}`;
    return this._contactHttp.get<Contact>(URL)
}
}