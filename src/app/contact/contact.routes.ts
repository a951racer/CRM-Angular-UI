import { Routes } from '@angular/router';
import { ContactListComponent } from '../contact/contact-list/contact-list.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

export const ContactRoutes: Routes = [{
  path: 'contacts',
  //component: ContactComponent,
  children: [
        { path: '', component: ContactListComponent },
        { path: 'new', component: ContactEditComponent, data: {new: true}},
        { path: ':id', component: ContactEditComponent, data: {new: false}}
    ],
}];
