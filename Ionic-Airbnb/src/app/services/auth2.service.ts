import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Auth2Service {

  // A URL da API
  apiUrl: string = "http://localhost:8000/api/";

  httpHeaders: object = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  constructor( public http: HttpClient ) { }

  registrarUsuario( form ): Observable<any> {
    return this.http.post( this.apiUrl + 'register', form, this.httpHeaders );
  }

  logarUsuario( form ): Observable<any> {
    return this.http.post( this.apiUrl + 'login', form, this.httpHeaders );
}
}
