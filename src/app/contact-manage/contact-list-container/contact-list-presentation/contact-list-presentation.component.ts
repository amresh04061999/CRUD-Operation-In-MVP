import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../../contact.model';
import { DataCommunicationService } from '../../service/data-communication.service';
import { ContactListPresenterService } from '../contact-list-presenter/contact-list-presenter.service';

@Component({
  selector: 'app-contact-list-presentation',
  templateUrl: './contact-list-presentation.component.html',
  styleUrls: ['./contact-list-presentation.component.scss'],
  viewProviders: [ContactListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactListPresentationComponent implements OnInit {
  // Setter
  @Input() set contactList(Response: Contact[] | null) {
    if (Response) {
      this._contactList = Response;
    }
  }
  // Getter
  public get contactList(): Contact[] {
    return this._contactList;
  }

  private _contactList!: Contact[];
  // Output Create in Delete
  @Output() public delete: EventEmitter<number>;
  public Search!: string;
  constructor(
    private _ContactListPresenterService: ContactListPresenterService,
    private _dataCommunicationService: DataCommunicationService,
    private router: Router
  ) {
    this.delete = new EventEmitter();
    console.log(this.Search);
  }
  ngOnInit(): void {
    /**
     * delete Response pass on Container
     */
    this._ContactListPresenterService.delete$.subscribe((res: any) => {
      this.delete.emit(res);
    });
  }
  /**
   * Redirect edit Form
   * @param id
   */
  public editContact(id: number) {
    this.router.navigateByUrl(`contact-manage/edit/${id}`);
  }
  /**
   * Delete Contact
   * @param id
   */
  public deleteContact(id: number) {
    this._ContactListPresenterService.deleteContact(id);
  }
  /**
   * View contact Details
   * @param item
   */
  public viewContact(item: any) {
    this.contactList.find((items: Contact) => {
      if (items.id == item) {
        const viewContact = items;
        this._dataCommunicationService.viewContact.next(viewContact);
      }
    });
    this.router.navigateByUrl('/contact-manage/contact-view');
  }
}
