import { Routes } from '@angular/router';
import { ContactComponent } from './contact.component';

export const ContactRoutes: Routes = [{
  path: 'contacts',
  component: ContactComponent,
  children: [
        { path: '', component: ContactComponent }
    ],
}];
