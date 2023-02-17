import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../contact.model';
import { ContactListPresenterService } from '../contact-list-presenter/contact-list-presenter.service';

@Component({
  selector: 'app-contact-list-presentation',
  templateUrl: './contact-list-presentation.component.html',
  styleUrls: ['./contact-list-presentation.component.scss'],
  viewProviders:[ContactListPresenterService],
})
export class ContactListPresentationComponent implements OnInit {
        // set data for list
        @Input() set contactlist(Response:Contact[] | null){
          console.log(Response);
          
          if(Response){
            this._contactlist=Response
          }
        }
        public get contactlist():Contact[]{
          return this._contactlist
        }
        private _contactlist! : Contact[];
         // Delete
  @Output() public delete : EventEmitter<number>;
  constructor(private _ContactListPresenterService:ContactListPresenterService,private router:Router,private activateRouter:ActivatedRoute){
    this.delete = new EventEmitter();
  }
  ngOnInit(): void {
  this._ContactListPresenterService.delete$.subscribe((res:any)=>{
      this.delete.emit(res)
  })
  }
// edite function Open form
  public editContact(id:number){
   this.router.navigateByUrl(`contact-manage/edit/${id}`)
  }
  // delete contact
  public deleteContact(id:number){
    this._ContactListPresenterService.deleteContact(id)

  }
}
