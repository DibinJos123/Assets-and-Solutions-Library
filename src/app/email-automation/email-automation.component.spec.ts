import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailAutomationComponent } from './email-automation.component';

describe('EmailAutomationComponent', () => {
  let component: EmailAutomationComponent;
  let fixture: ComponentFixture<EmailAutomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailAutomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
