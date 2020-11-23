import { Component, OnInit } from '@angular/core';
import { Answer } from '../../models/answer';
import { Question } from '../../models/question';
import { QuestionServiceService } from '../../services/question-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-module-question',
  templateUrl: './module-question.component.html',
  styleUrls: ['./module-question.component.scss']
})
export class ModuleQuestionComponent implements OnInit {
  public books = [];
  public Question: Question;
  public Answer1: Answer;
  public Answer2: Answer;
  public Answer3: Answer;
  public Answer4: Answer;
  public formsCorrect: boolean;

  public checked1: boolean;
  public checked2: boolean;
  public checked3: boolean;
  public checked4: boolean;
  constructor(private questionApi: QuestionServiceService) { }

  ngOnInit(): void {
    this.Question = new Question();
    this.Answer1 = new Answer();
    this.Answer2 = new Answer();
    this.Answer3 = new Answer();
    this.Answer4 = new Answer();

    this.checked1 = false;
    this.checked2 = false;
    this.checked3 = false;
    this.checked4 = false;

    this.formsCorrect = true;
    this.questionApi.findAllBooks().subscribe((res: any) => {
      for (let item of res.data) {
        this.books.push({ label: item.nameBook, value: item.idBook })
      }
    });
  }

  saveQuestionModule() {
    if (this.Question.idBook) {
      if (this.Answer1.textAnswer || this.Answer2.textAnswer || this.Answer3.textAnswer || this.Answer4.textAnswer) {
        if(this.checked1 || this.checked2 || this.checked3 || this.checked4){
          this.Answer1.isCorrect = (this.checked1) ? 1 : 0;
          this.Answer2.isCorrect = (this.checked2) ? 1 : 0;
          this.Answer3.isCorrect = (this.checked3) ? 1 : 0;
          this.Answer4.isCorrect = (this.checked4) ? 1 : 0;
          this.questionApi.saveQuestion(this.Question).subscribe( (res: Question) => {
            if(res.idQuestion){
              this.Answer1.idQuestion = res.idQuestion;
              this.Answer2.idQuestion = res.idQuestion;
              this.Answer3.idQuestion = res.idQuestion;
              this.Answer4.idQuestion = res.idQuestion;
              this.questionApi.saveAnswer(this.Answer1).subscribe( (res: Answer) => {

              });
              this.questionApi.saveAnswer(this.Answer2).subscribe( (res: Answer) => {

              });
              this.questionApi.saveAnswer(this.Answer3).subscribe( (res: Answer) => {

              });
              this.questionApi.saveAnswer(this.Answer4).subscribe( (res: Answer) => {

              });
              Swal.fire(
                'Pregunta',
                'QUIZ GUARDADO EXITOSAMENTE',
                'success'
              ) 
            }
          });
        } else {
          this.formsCorrect = false;
          Swal.fire(
            'Pregunta',
            'DEBE MARCAR UNA RESPUESTA COMO CORRECTA',
            'error'
          )  
        }
      } else {
        this.formsCorrect = false;
      }
    } else {
      this.formsCorrect = false;
    }
  }

  changeToggle(index) {
    switch (index) {
      case '1':
        this.checked2 = false;
        this.checked3 = false;
        this.checked4 = false;
        break;
      case '2':
        this.checked1 = false;
        this.checked3 = false;
        this.checked4 = false;
        break
      case '3':
        this.checked1 = false;
        this.checked2 = false;
        this.checked4 = false;
        break
      case '4':
        this.checked1 = false;
        this.checked2 = false;
        this.checked3 = false;
        break
    }
  }
}
