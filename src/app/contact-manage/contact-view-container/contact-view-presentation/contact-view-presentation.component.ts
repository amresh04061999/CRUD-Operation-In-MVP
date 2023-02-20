import { Component, OnInit } from '@angular/core';
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
