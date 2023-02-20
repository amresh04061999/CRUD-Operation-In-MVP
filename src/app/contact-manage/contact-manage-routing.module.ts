import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormContainerComponent } from './contact-form-container/contact-form-container.component';
import { ContactListContainerComponent } from './contact-list-container/contact-list-container.component';
import { ContactManageComponent } from './contact-manage.component';
import { ContactViewContainerComponent } from './contact-view-container/contact-view-container.component';

const routes: Routes = [{
  path: '', component: ContactManageComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo:'employee-list'
  },
    {
      path: "employee-list", component: ContactListContainerComponent
    },
    {
      path: 'contact-form', component: ContactFormContainerComponent
    },
    {
      path: 'contact-list', component: ContactListContainerComponent
    },
    {
      path: 'contact-view', component: ContactViewContainerComponent
    },
    {
      path: 'edit/:id',
      component: ContactFormContainerComponent
    },
  
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactManageRoutingModule { }
