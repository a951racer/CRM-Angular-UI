import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  providers: [ContactService]
})
export class ContactListComponent implements OnInit {
  contacts: any;
  errorMessage: string;
  columns = ['Last Name', 'First Name', 'Company', 'Email'];
  newContact = false;
  editedContact: any;

  constructor(private _contactService: ContactService,
              private _router: Router) { }

  ngOnInit() {
    this._contactService.list().subscribe(contacts  => this.contacts = contacts);
  }

  addContact() {
    this._router.navigate(['contacts/new']);
  }

  editContact(id) {
    this._router.navigate(['contacts/' + id]);
  }

  deleteContact() {
    
  }
}
