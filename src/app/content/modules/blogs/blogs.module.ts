import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteBlogsComponent } from './write-blogs/write-blogs.component';
import { BlogsPageComponent } from './blogs-page/blogs-page.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { EditBlogsComponent } from './edit-blogs/edit-blogs.component';



@NgModule({
  declarations: [
    WriteBlogsComponent,
    BlogsPageComponent,
    BlogsListComponent,
    EditBlogsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogsModule { }
