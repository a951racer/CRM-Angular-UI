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

  /***  Error Handling **************************************/

  private handleError(error: HttpErrorResponse) {
    return throwError(error.error.message || 'Server error');
  }
}
