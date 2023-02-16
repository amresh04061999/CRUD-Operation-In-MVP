import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Contact } from '../../contact.model';

@Injectable()
export class ContactFormPresenterService {
  private  addContact:Subject<Contact>
  private  addContact$:Observable<Contact>
  constructor(private fb:FormBuilder) { 
    this.addContact=new Subject();
    this.addContact$=new Observable();
    this.addContact$=this.addContact.asObservable()
  }

  // form bulder function  using presentation
  public BuildForm():FormGroup {
    return this.fb.group({
         id:[''] ,
         fullname:['',Validators.compose([Validators.required])], 
         mobileno:['',Validators.compose([Validators.required])],  
         email:['',Validators.compose([Validators.required])]  ,
         address:['',Validators.compose([Validators.required])],
    })
  }

  // on submited data 
  public submitData(contact:FormGroup){
    if(!contact.valid){
      return
    }
    this.addContact.next(contact.value)
  }
  
}