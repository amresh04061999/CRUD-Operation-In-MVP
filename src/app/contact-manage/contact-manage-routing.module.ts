import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListContainerComponent } from './contact-list-container/contact-list-container.component';
import { ContactManageComponent } from './contact-manage.component';

const routes: Routes = [{
  path: '', component: ContactManageComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo:'employee-list'
  },
    {
      path: "employee-list", component: ContactListContainerComponent
    }
  
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactManageRoutingModule { }
