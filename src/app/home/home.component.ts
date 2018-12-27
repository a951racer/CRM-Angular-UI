import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'CRM';
  subtitle = 'For Ultimate Customer Service';
  user: any;
  authenticated: boolean;
  errorMessage: any;

  constructor (private _authenticationService: AuthenticationService,
                private _router: Router) {
    this.user = this._authenticationService.user;
    this.authenticated = this._authenticationService.isLoggedIn();
  }
  
  
  ngOnInit() {
  }

  

  login() {
    this._router.navigate(['/authentication/signin']);
  } 

  signUp() {
    this._router.navigate(['/authentication/signup']);
  }

  signOut() {
/*    window['user'] = null;
    this.user = null;
    this.authenticated = false;*/
    this._router.navigate(['/authentication/signout']);

  }

  onClick(buttonName) {
    switch (buttonName) {
      case 'Contacts':
        console.log('clicked contacts button');
        this._router.navigate(['/contacts']);
    }
  }
}
