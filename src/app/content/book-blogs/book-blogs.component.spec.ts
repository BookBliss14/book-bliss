import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBlogsComponent } from './book-blogs.component';

describe('BookBlogsComponent', () => {
  let component: BookBlogsComponent;
  let fixture: ComponentFixture<BookBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
