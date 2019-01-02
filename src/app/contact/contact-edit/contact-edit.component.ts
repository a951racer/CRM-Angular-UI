import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  data: any;
  inboundContact: any;
  isNewContact: boolean;
  id: string;
  contact: any;
  dataLoaded = false;
  title: string;

  constructor(private _contactService: ContactService,
              private route: ActivatedRoute,
              private router: Router,
) { }

  ngOnInit() {
    this.data = this.route.data.subscribe((data) => {
      this.isNewContact = data.new;
    });
    this.inboundContact = this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    })
    if (!this.isNewContact) {
      this._contactService.getContact(this.id).subscribe(contact => {
          this.contact = contact;
          this.title = "EDIT CONTACT"
          this.dataLoaded = true;
        })
    } else {
      this.title = "NEW CONTACT";
      this.contact = new Object();
      this.dataLoaded = true;
    };
  }

  buttonClick(type) {
    if (type === 'save') {
      if (this.isNewContact) {
        this._contactService.newContact(this.contact).subscribe(contact => {
          this.router.navigate(['contacts']);
        });
      } else {
        this._contactService.updateContact(this.contact).subscribe(contact => {
          this.router.navigate(['contacts']);
        })
      }
    } else {
      this.router.navigate(['contacts']);
    }
  }
}
