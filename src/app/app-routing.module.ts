import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { FavComponent } from './fav/fav.component';

const routes: Routes = [
  {
    path: 'fav',
    component: FavComponent
  },
  {
    path: 'booklist',
    component: BookListComponent
  },
  {
    path: '',
    component: BookListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
