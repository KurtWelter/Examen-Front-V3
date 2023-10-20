import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DjangoService {
  apiURL = 'http://127.0.0.1:8000/api/'; // Asegúrate de que la URL sea correcta

  constructor(public http: HttpClient) {}

  listarPost(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.get(this.apiURL + '/users_list', httpOptions);
  }
}
