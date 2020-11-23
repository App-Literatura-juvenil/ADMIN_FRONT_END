import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Author } from '../../models/author'
import { AuthorServiceService } from '../../services/author-service.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-module-author',
  templateUrl: './module-author.component.html',
  styleUrls: ['./module-author.component.scss']
})
export class ModuleAuthorComponent implements OnInit {
  public author: Author;
  public formsCorrect: boolean;
  public imageAuthor: File;
  public imageAuthorBase64: any;
  
  @ViewChild('inputFile') fileAuthor: ElementRef;

  constructor(private authorApi: AuthorServiceService) { }

  ngOnInit(): void {
    this.author = new Author();
    this.formsCorrect = true;
  }

  saveAuthorModule(){
    /*const authorData = new FormData();
    console.log(JSON.stringify(this.author))
    console.log(this.imageAuthor)
    authorData.append("author", JSON.stringify(this.author));
    if(this.imageAuthor){
      authorData.append("file",this.imageAuthor);
    }*/
    if(this.author.nameAuthor){
      if(this.author.surnameAuthor){
        if(this.author.biography){
          this.author.imageAuthor = '';
          this.authorApi.saveAuthor(this.author).subscribe( (res:any) => {
            if(res.idAuthor){
              Swal.fire(
                'Autor',
                'Autor guardado exitosamente',
                'success'
              );
              this.author = new Author();
            } else {
              Swal.fire(
                'Autor',
                'El Autor no pudo ser guardado',
                'error'
              );
            }
          });
        }else{
          this.formsCorrect = false;
        }
      } else {
        this.formsCorrect = false;
      }
    } else {
      this.formsCorrect = false;
    }
  }
  onBasicUpload(event){
    this.imageAuthor = <File>event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.imageAuthor);
    reader.onload = () => {
        this.imageAuthorBase64 = reader.result;
    };
  }

  removeImage(){
    this.imageAuthorBase64 = null;
    this.imageAuthor = null;
    (<HTMLInputElement>document.getElementById("fileAuthor")).value = '';
    this.fileAuthor.nativeElement.value = null
  }
}
