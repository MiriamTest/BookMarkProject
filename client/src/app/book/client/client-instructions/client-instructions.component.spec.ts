import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInstructionsComponent } from './client-instructions.component';

describe('ClientInstructionsComponent', () => {
  let component: ClientInstructionsComponent;
  let fixture: ComponentFixture<ClientInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
