import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ContactRoutes } from './contact.routes';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactService } from './contact.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ContactRoutes)
  ],
  declarations: [
    ContactListComponent,
    ContactEditComponent
  ],
  providers: [
    ContactService
  ]
})
export class ContactModule { }
