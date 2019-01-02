import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-delete',
  templateUrl: './contact-delete.component.html',
  styleUrls: ['./contact-delete.component.scss']
})
export class ContactDeleteComponent implements OnInit {
  inboundContact: any;
  id: string;
  contact: any;
  dataLoaded = false;

  constructor(private _contactService: ContactService,
              private route: ActivatedRoute,
              private router: Router,
) { }

  ngOnInit() {
    this.inboundContact = this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    })
    this._contactService.getContact(this.id).subscribe(contact => {
        this.contact = contact;
        this.dataLoaded = true;
      })
  }

  buttonClick(type) {
    if (type === 'delete') {
        this._contactService.deleteContact(this.contact).subscribe(contact => {
          this.router.navigate(['contacts']);
        });
    } else {
      this.router.navigate(['contacts']);
    }
  }
}
