import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerInstructionsComponent } from './manager-instructions.component';

describe('ManagerInstructionsComponent', () => {
  let component: ManagerInstructionsComponent;
  let fixture: ComponentFixture<ManagerInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
