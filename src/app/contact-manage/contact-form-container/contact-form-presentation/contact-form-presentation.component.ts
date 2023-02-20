import { ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Component } from '@angular/core';
import { ContactFormPresenterService } from '../contact-form-presenter/contact-form-presenter.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Contact } from '../../contact.model';
@Component({
  selector: 'app-contact-form-presentation',
  templateUrl: './contact-form-presentation.component.html',
  styleUrls: ['./contact-form-presentation.component.scss'],
  viewProviders: [ContactFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormPresentationComponent implements OnInit {


  // geter 
  @Input() public set contactdata(value: Contact | null) {
    if (value) {
      this.contactForm.patchValue(value);
      this.title = "Edit"
      this._contactdata = value
    }

  }

  public get contactdata(): Contact | null {
    return this._contactdata
  }
  public imagefile!:File
  private _contactdata!: Contact
  public contactForm: FormGroup;
  public isSubmited: boolean;
  public title: string;
  public base64!: any;
  fileToUpload: any;
  // output created addContact
  @Output() public addContact: EventEmitter<Contact>
  // output created editContact
  @Output() public editContact: EventEmitter<Contact>
  constructor(private _contactPresenterServices: ContactFormPresenterService,private changeDetection:ChangeDetectorRef) {
    this.isSubmited = false;
    this.title = 'Add'

    // contact form builder
    this.contactForm = this._contactPresenterServices.BuildForm();
    //  output mathod
    this.addContact = new EventEmitter();
    this.editContact = new EventEmitter();
  }
  ngOnInit(): void {
    //  emit data in container
    this._contactPresenterServices.Contactdata$.subscribe((res: Contact) => {
      if (this.contactdata) {
        this.editContact.emit(res)
      }
      else {
        this.addContact.emit(res)
      }
      //  this.addContact.emit(res)
      //  this.title === "Edit"?this.editContact.emit(res):this.addContact.emit(res)
    })
    
  }

 
  // select image logic
  public selectImage(event:any){
   this._contactPresenterServices.selectImage(event)

   this._contactPresenterServices.base64image$.subscribe((Response) => {
    this.changeDetection.markForCheck()
    this.base64 = Response
    console.log(Response)
  })
  }
  //  save contact  
  public saveContact() {
    this._contactPresenterServices.submitData(this.contactForm)
  }
  // select image
  public SelectImage(event: any) {
    // this._contactPresenterServices.selectImage(event)

  }
  // validation function
  get formValidator(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  // Reset form function
  public formReset() {
    this.isSubmited = false
    this.contactForm.reset()
  }

}
