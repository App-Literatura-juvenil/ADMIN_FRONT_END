import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor(private http: HttpClient) { }

  public findAllBooks(){
    const headers = {'Content-Type': 'application/json'}
    return this.http.get(`${environment.urlApi}book`,{ headers });
  }

  public saveQuestion(Question){
    const headers = {'Content-Type': 'application/json'}
    return this.http.post(`${environment.urlApi}question`, Question, { headers });
  }

  public saveAnswer(Answer){
    const headers = {'Content-Type': 'application/json'}
    return this.http.post(`${environment.urlApi}answer`, Answer, { headers });
  }
}
