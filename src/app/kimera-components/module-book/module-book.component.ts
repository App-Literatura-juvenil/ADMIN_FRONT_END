import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book'
import { Author } from '../../models/author'
import { BookserviceService } from '../../services/bookservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-module-book',
  templateUrl: './module-book.component.html',
  styleUrls: ['./module-book.component.scss']
})
export class ModuleBookComponent implements OnInit {

  public Authors = [];
  public authorBook: Author;
  public formsCorrect: boolean;
  public newBook: Book;
  constructor(private bookApi: BookserviceService) { }

  ngOnInit(): void {
    this.authorBook = new Author();
    this.formsCorrect = true;
    this.newBook = new Book();
    this.bookApi.findAllAuthors().subscribe( (res: any) => {
      for (let item of res.data){
        this.Authors.push({label: `${item.nameAuthor} ${item.surnameAuthor}`, value: item.idAuthor})
      }
    });
  }

  saveBookModule(){
    console.log(this.newBook)
    if(this.newBook.idAuthor){
      if(this.newBook.nameBook){
        this.newBook.image = '';
        this.bookApi.saveBook(this.newBook).subscribe((res:Book) => {
          if(res.idBook){
            Swal.fire(
              'Libro',
              'El Libro fue guardado exitosamente',
              'success'
            );
            this.newBook = new Book()
          }
        })
      }
    }
  }
}
