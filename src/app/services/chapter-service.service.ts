import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ChapterServiceService {
  constructor(private http: HttpClient) { }

  public findAllBooks(){
    const headers = {'Content-Type': 'application/json'}
    return this.http.get(`${environment.urlApi}book`,{ headers });
  }

  public saveChapter(newChapter){
    const headers = {'Content-Type': 'application/json'}
    return this.http.post(`${environment.urlApi}chapter`, newChapter, { headers });
  }
}
