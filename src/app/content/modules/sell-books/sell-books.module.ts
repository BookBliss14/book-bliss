import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostBooksComponent } from './post-books/post-books.component';
import { PostConfirmComponent } from './post-confirm/post-confirm.component';



@NgModule({
  declarations: [
    PostBooksComponent,
    PostConfirmComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SellBooksModule { }
