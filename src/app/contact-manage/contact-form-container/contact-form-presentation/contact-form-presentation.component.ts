import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Component } from '@angular/core';
import { ContactFormPresenterService } from '../contact-form-presenter/contact-form-presenter.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Contact } from '../../contact.model';
@Component({
  selector: 'app-contact-form-presentation',
  templateUrl: './contact-form-presentation.component.html',
  styleUrls: ['./contact-form-presentation.component.scss'],
  viewProviders: [ContactFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormPresentationComponent implements OnInit {
  // Setter
  @Input() public set contactData(value: Contact | null) {
    if (value) {
      this.contactForm.patchValue(value);
      this.title = 'Edit';
      this._contactData = value;
    }
  }
  // Getter
  public get contactData(): Contact | null {
    return this._contactData;
  }
  private _contactData!: Contact;
  public contactForm: FormGroup;
  public isSubmitted: boolean;
  public title: string;
  public base64!: any;

  // Output create addContact
  @Output() public addContact: EventEmitter<Contact>;

  // Output created editContact
  @Output() public editContact: EventEmitter<Contact>;

  constructor(
    private _contactPresenterServices: ContactFormPresenterService,
    private _changeDetection: ChangeDetectorRef
  ) {
    this.isSubmitted = false;
    this.title = 'Add';
    // contact form builder
    this.contactForm = this._contactPresenterServices.BuildForm();
    // output method
    this.addContact = new EventEmitter();
    this.editContact = new EventEmitter();
  }
  ngOnInit(): void {
    /**
     *  Emit data in container using Presenter services
     */
    this._contactPresenterServices.ContactData$.subscribe((res: Contact) => {
      if (this.contactData) {
        this.editContact.emit(res);
      } else {
        this.addContact.emit(res);
      }
    });
  }
  /**
   * Select image
   * @param event
   */
  public selectImage(event: any) {
    this._contactPresenterServices.selectImage(event);
    this._contactPresenterServices.base64image$.subscribe((Response) => {
      this._changeDetection.markForCheck();
      this.base64 = Response;
    });
  }
  /**
   * Save contact Details
   */
  public saveContact() {
    this.isSubmitted = true;
    this._contactPresenterServices.submitData(this.contactForm);
  }

  /**
   * Short Variable Create in Validation
   */
  get formValidator(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  /**
   * Reset Form
   */
  public formReset() {
    this.isSubmitted = false;
    this.contactForm.reset();
  }
}
