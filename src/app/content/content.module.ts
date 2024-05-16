import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyBooksComponent } from './buy-books/buy-books.component';
import { SellBooksComponent } from './sell-books/sell-books.component';
import { BookBlogsComponent } from './book-blogs/book-blogs.component';



@NgModule({
  declarations: [
    BuyBooksComponent,
    SellBooksComponent,
    BookBlogsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContentModule { }
