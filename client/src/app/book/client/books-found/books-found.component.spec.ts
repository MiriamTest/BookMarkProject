import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksFoundComponent } from './books-found.component';

describe('BooksFoundComponent', () => {
  let component: BooksFoundComponent;
  let fixture: ComponentFixture<BooksFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
