import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthorServiceService {

  constructor(private http: HttpClient) { }

  public saveAuthor(AuthorData:any){
    //x-www-form-urlencoded
    const headers = {'Content-Type': 'application/json'}
    return this.http.post(`${environment.urlApi}author`,AuthorData, { headers });
  }


}
