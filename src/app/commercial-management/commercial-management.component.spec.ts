import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialManagementComponent } from './commercial-management.component';

describe('CommercialManagementComponent', () => {
  let component: CommercialManagementComponent;
  let fixture: ComponentFixture<CommercialManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
