import { Component, OnInit } from '@angular/core';
import { Chapter } from '../../models/chapter'
import { ChapterServiceService } from '../../services/chapter-service.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-module-chapter',
  templateUrl: './module-chapter.component.html',
  styleUrls: ['./module-chapter.component.scss']
})
export class ModuleChapterComponent implements OnInit {
  public newChapter: Chapter;
  public books = [];
  public formsCorrect: boolean;

  constructor(private chapterApi: ChapterServiceService) { }

  ngOnInit(): void {
    this.chapterApi.findAllBooks().subscribe( (res: any) => {
      for(let item of res.data){
        this.books.push({label: item.nameBook, value: item.idBook})
      }
    });
    this.formsCorrect = true;
    this.newChapter = new Chapter();
  }

  saveChapterModule() {
    this.chapterApi.saveChapter(this.newChapter).subscribe( (res: Chapter) => {
      if(res.idChapter){
        Swal.fire(
          'Capitulo',
          'CAPITULO GUARDADO EXITOSAMENTE',
          'success'
        )
      } else {
        Swal.fire(
          'Capitulo',
          'EL CAPITULO NO PUDO SER GUARDADO',
          'error'
        )
      }
    })
  }
}
