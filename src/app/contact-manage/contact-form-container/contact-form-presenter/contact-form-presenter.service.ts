import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Contact } from '../../contact.model';

@Injectable()
export class ContactFormPresenterService {
  public imageFile!: File;
  public base64: any;
  private base64image: BehaviorSubject<any>;
  public base64image$: Observable<any>;
  private ContactData: Subject<Contact>;
  public ContactData$: Observable<Contact>;
  constructor(private fb: FormBuilder) {
    this.ContactData = new Subject();
    this.ContactData$ = new Observable();
    this.ContactData$ = this.ContactData.asObservable();
    this.base64image = new BehaviorSubject('');
    this.base64image$ = new Observable();
    this.base64image$ = this.base64image.asObservable();
  }
  /**
   * Create  contact-form  builder function
   * @returns
   */
  public BuildForm(): FormGroup {
    return this.fb.group({
      id: [''],
      fullName: ['', Validators.compose([Validators.required])],
      mobilNumber: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      profileImage: [''],
    });
  }

  /**
   * Select Image logic
   * @param event
   */
  public selectImage(event: any) {
    this.imageFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.imageFile);
    reader.onload = () => {
      this.base64 = reader.result;
      this.base64image.next(this.base64);
    };
  }

  /**
   * Save user Login
   * @param contact
   * @returns
   */
  public submitData(contact: FormGroup) {
    contact.controls['profileImage'].setValue(this.base64);
    if (!contact.valid) {
      return;
    }
    this.ContactData.next(contact.value);
  }
}
