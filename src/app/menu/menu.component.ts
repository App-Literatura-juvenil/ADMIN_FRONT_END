import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Crear Libros', icon: 'pi pi-fw pi-pencil', routerLink: ['/addBook']},
      {label: 'Crear Autores', icon: 'pi pi-fw pi-pencil', routerLink: ['/addAuthor']},
      {label: 'Crear Capitulos', icon: 'pi pi-fw pi-pencil', routerLink: ['/addChapter']},
      {label: 'Crear Preguntas', icon: 'pi pi-fw pi-pencil', routerLink: ['/addQuestion']}
    ]
  }

}
