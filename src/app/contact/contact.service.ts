import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, } from 'rxjs/operators';
import { Observable, throwError  } from 'rxjs';
import { apiConfig } from '../api.config';

@Injectable()
export class ContactService {
  private _baseURL = apiConfig.contactURL;
  constructor (private _http: HttpClient) {}

  list(): Observable<any> {
    return this._http
      .get(this._baseURL)
      .pipe(catchError(this.handleError));
  }

  getContact(id): Observable<any> {
    return this._http
      .get(this._baseURL + '/' + id)
      .pipe(catchError(this.handleError))
  }

  newContact(contact): Observable<any> {
    return this._http
    .post(this._baseURL, contact)
    .pipe(catchError(this.handleError))
  }

  updateContact(contact):  Observable<any> {
    return this._http
    .put(this._baseURL + '/' + contact._id, contact)
    .pipe(catchError(this.handleError))
  }
  
  /***  Error Handling **************************************/

  private handleError(error: HttpErrorResponse) {
    return throwError(error.error.message || 'Server error');
  }
}
