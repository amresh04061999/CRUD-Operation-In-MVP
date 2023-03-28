import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactManageRoutingModule } from './contact-manage-routing.module';
import { ContactManageComponent } from './contact-manage.component';
import { ContactListContainerComponent } from './contact-list-container/contact-list-container.component';
import { ContactListPresentationComponent } from './contact-list-container/contact-list-presentation/contact-list-presentation.component';
import { ContactFormContainerComponent } from './contact-form-container/contact-form-container.component';
import { ContactFormPresentationComponent } from './contact-form-container/contact-form-presentation/contact-form-presentation.component';
import { ContactViewContainerComponent } from './contact-view-container/contact-view-container.component';
import { ContactViewPresentationComponent } from './contact-view-container/contact-view-presentation/contact-view-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactManageService } from './service/contact-manage.service';
import { HttpClientModule } from '@angular/common/http';
import { DataCommunicationService } from './service/data-communication.service';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    ContactManageComponent,
    ContactListContainerComponent,
    ContactListPresentationComponent,
    ContactFormContainerComponent,
    ContactFormPresentationComponent,
    ContactViewContainerComponent,
    ContactViewPresentationComponent
  ],
  imports: [
    CommonModule,
    ContactManageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    FormsModule
    
  ],
  providers:[ContactManageService,DataCommunicationService]
})
export class ContactManageModule { }
