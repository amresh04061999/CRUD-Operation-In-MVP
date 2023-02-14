import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManageComponent } from './contact-manage.component';

const routes: Routes = [{ path: '', component: ContactManageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactManageRoutingModule { }
