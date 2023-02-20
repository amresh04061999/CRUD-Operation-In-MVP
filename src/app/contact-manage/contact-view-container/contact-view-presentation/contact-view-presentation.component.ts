import { Component, OnInit } from '@angular/core';
import { ContactListPresenterService } from '../../contact-list-container/contact-list-presenter/contact-list-presenter.service';
import { Contact } from '../../contact.model';
import { DataCommunicationService } from '../../service/data-communication.service';

@Component({
  selector: 'app-contact-view-presentation',
  templateUrl: './contact-view-presentation.component.html',
  styleUrls: ['./contact-view-presentation.component.scss']
})
export class ContactViewPresentationComponent implements OnInit {
    public viewData!:any
    constructor(private dataCommunicationServies:DataCommunicationService){

    }
  ngOnInit(): void {
    this.dataCommunicationServies.viewcontact$.subscribe((res)=>{
      this.viewData= res
    })
  }
}
