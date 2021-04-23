import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewPolicyDetailsComponent } from './renew-policy-details.component';

describe('RenewPolicyDetailsComponent', () => {
  let component: RenewPolicyDetailsComponent;
  let fixture: ComponentFixture<RenewPolicyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewPolicyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewPolicyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
