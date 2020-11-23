import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
/* Componentes from applicaction */
import { AppComponent } from './app.component';
import { KimeraNgQuillComponent } from './kimera-ng-quill/kimera-ng-quill.component';
import { ModuleBookComponent } from './kimera-components/module-book/module-book.component';
import { ModuleChapterComponent } from './kimera-components/module-chapter/module-chapter.component';
import { ModuleQuestionComponent } from './kimera-components/module-question/module-question.component';
import { ModuleAuthorComponent } from './kimera-components/module-author/module-author.component';
import { MenuComponent } from './menu/menu.component';
/* Services */
import { AuthorServiceService } from './services/author-service.service'
/*Dependencies from Quill */
import Quill from 'quill';
import ImageResize  from 'quill-image-resize';
/*Dependencies from Angular Material  */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*Dependencies from Primeng */
import { TabMenuModule } from 'primeng/tabmenu';
import { CardModule } from 'primeng/card'
import { DropdownModule } from 'primeng/dropdown'
import { ButtonModule } from 'primeng/button'

@NgModule({
  declarations: [
    AppComponent,
    KimeraNgQuillComponent,
    MenuComponent,
    ModuleBookComponent,
    ModuleChapterComponent,
    ModuleQuestionComponent,
    ModuleAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TabMenuModule,
    CardModule,
    DropdownModule,
    ButtonModule
  ],
  providers: [
    AuthorServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor () {
    Quill.register('modules/imageResize', ImageResize);
  }
}
