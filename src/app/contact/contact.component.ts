import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {
  contacts: any;
  errorMessage: string;
  columns = ['Last Name', 'First Name', 'Company', 'Email'];

  constructor(private _contactService: ContactService,
              private _router: Router) { }

  ngOnInit() {
    this._contactService.list().subscribe(contacts  => this.contacts = contacts);
  }
}
