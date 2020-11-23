import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleAuthorComponent } from './kimera-components/module-author/module-author.component';
import { ModuleBookComponent } from './kimera-components/module-book/module-book.component';
import { ModuleChapterComponent } from './kimera-components/module-chapter/module-chapter.component';
import { ModuleQuestionComponent } from './kimera-components/module-question/module-question.component';

const routes: Routes = [
  { path: 'addBook', component: ModuleBookComponent },
  { path: 'addAuthor', component: ModuleAuthorComponent },
  { path: 'addChapter', component: ModuleChapterComponent },
  { path: 'addQuestion', component: ModuleQuestionComponent },
  { path: '', redirectTo: 'addBook', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
