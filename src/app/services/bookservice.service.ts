import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http: HttpClient) { }

  public findAllAuthors() {
    const headers = {'Content-Type': 'application/json'}
    return this.http.get(`${environment.urlApi}author`, { headers });
  }

  public saveBook(bookSave) {
    const headers = {'Content-Type': 'application/json'}
    return this.http.post(`${environment.urlApi}book`, bookSave,{ headers });
  }
}
