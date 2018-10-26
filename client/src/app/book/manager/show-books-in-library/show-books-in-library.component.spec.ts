import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBooksInLibraryComponent } from './show-books-in-library.component';

describe('ShowBooksInLibraryComponent', () => {
  let component: ShowBooksInLibraryComponent;
  let fixture: ComponentFixture<ShowBooksInLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBooksInLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBooksInLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
