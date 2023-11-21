import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';


class Observer {
  next: Function;
  error: Function;
  complete: Function;
}

export class SingleResponse {
  public status: number;
  public IsSuccess: boolean;
  public details: string;
}

export class Responses {
  public errors: SingleResponse[] = [];
  public success: SingleResponse[] = [];
}

export class BaseService {
  genericError = "";
  public httpClient: HttpClient;
  constructor(public injector: Injector) {
    this.httpClient = injector.get(HttpClient);
    this.genericError = `Some Error occcured, Please contact Administrator.`;
  }

  get<T>(url: string): Observable<T> {
    let response = this.httpClient
      .get<Responses & T>(url);

    return new Observable((observer: Observer) => {
      response.subscribe(response => {
        if (response.errors && response.errors.length > 0)
          observer.error(response.errors);
        else {
          observer.next(response);
        }
        observer.complete();
      }, error => {
        if (error) {
          observer.error([{ title: error.name, detail: this.genericError, error }]);
        } else {
          observer.error([{ title: 'Error', detail: this.genericError, error }]);
        }
      });
    });

  }

  post(url: string, body: object): Observable<Responses[]> {

    let response = this.httpClient
      .post<Responses>(url, body);

    return new Observable((observer: Observer) => {
      response.subscribe(res => {
        if (res.errors && res.errors.length > 0)
          observer.error(res.errors);
        else
          observer.next(res.success);
        observer.complete();
      }, error => {
        if (error) {
          observer.error([{ title: error.name, detail: this.genericError, error }]);
        } else {
          observer.error([{ title: 'Error', detail: this.genericError, error }]);
        }
      });
    });

  }

  put(url: string, body: object): Observable<Responses[]> {

    let response = this.httpClient
      .put<Responses>(url, body);

    return new Observable((observer: Observer) => {
      response.subscribe(res => {
        if (res.errors && res.errors.length > 0)
          observer.error(res.errors);
        else
          observer.next(res.success);
        observer.complete();
      }, error => {
        if (error) {
          observer.error([{ title: error.name, detail: this.genericError, error }]);
        } else {
          observer.error([{ title: 'Error', detail: this.genericError, error }]);
        }
      });
    });

  }

  delete(url: string): Observable<Responses[]> {
    let response = this.httpClient
      .delete<Responses>(url);

    return new Observable((observer: Observer) => {
      response.subscribe(res => {
        if (res.errors && res.errors.length > 0)
          observer.error(res.errors);
        else
          observer.next(res.success);
        observer.complete();
      }, error => {
        observer.error([{ title: error.name, detail: this.genericError, error }]);
      });
    });

  }

}
