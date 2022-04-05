import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookComponent} from "./book/book.component";

const routes: Routes = [
  { path: 'sang', loadChildren:()=> import('./book/book.module').then(moude => moude.BookModule)},
  { path: 'book', component: BookComponent },
  { path: '', component: BookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
