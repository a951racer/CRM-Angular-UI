import { Routes } from '@angular/router';
import { ContactListComponent } from '../contact/contact-list/contact-list.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactDeleteComponent } from './contact-delete/contact-delete.component';

export const ContactRoutes: Routes = [{
  path: 'contacts',
  children: [
        { path: '', component: ContactListComponent },
        { path: 'new', component: ContactEditComponent, data: {new: true}},
        { path: ':id', component: ContactEditComponent, data: {new: false}},
        { path: 'delete/:id', component: ContactDeleteComponent }
    ],
}];
