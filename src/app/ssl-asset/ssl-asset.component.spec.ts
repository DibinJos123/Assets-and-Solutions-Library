import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SslAssetComponent } from './ssl-asset.component';

describe('SslAssetComponent', () => {
  let component: SslAssetComponent;
  let fixture: ComponentFixture<SslAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SslAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SslAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
