import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHelpdeskComponent } from './employee-helpdesk.component';

describe('EmployeeHelpdeskComponent', () => {
  let component: EmployeeHelpdeskComponent;
  let fixture: ComponentFixture<EmployeeHelpdeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeHelpdeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeHelpdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
