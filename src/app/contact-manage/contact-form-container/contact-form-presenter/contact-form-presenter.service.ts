import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Contact } from '../../contact.model';

@Injectable()
export class ContactFormPresenterService {
  public imagefile!:File
  public base64:any;
  formcontact:any;
  private  base64image:BehaviorSubject<any>
  public  base64image$:Observable<any>
  private  Contactdata:Subject<Contact>
  public  Contactdata$:Observable<Contact>
  constructor(private fb:FormBuilder) { 
    this.Contactdata=new Subject();
    this.Contactdata$=new Observable();
    this.Contactdata$=this.Contactdata.asObservable()
    this.base64image=new BehaviorSubject('');
    this.base64image$=new Observable();
    this.base64image$=this.base64image.asObservable()

  }
  // form bulder function  using presentation
  public  BuildForm():FormGroup {
    return this.fb.group({
         id:[''] ,
         fullname:['',Validators.compose([Validators.required])], 
         mobileno:['',Validators.compose([Validators.required])],  
         email:['',Validators.compose([Validators.required])]  ,
         address:['',Validators.compose([Validators.required])],
         profileImage:['']
    })
  }

  // select image logic
  public selectImage(event:any){
    this.imagefile =event.target.files[0];
    let reader= new FileReader();
    reader.readAsDataURL(this.imagefile);
    reader.onload = ()=> {
    this.base64=reader.result
    
    this.base64image.next(this.base64)
    }   
  }

  // on submited data 
  public submitData(contact:FormGroup){
    contact.controls['profileImage'].setValue(this.base64)
    if(!contact.valid){
      return
    }
    this.Contactdata.next(contact.value)

  }

}