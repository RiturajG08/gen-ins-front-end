import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentForRenewalComponent } from './payment-for-renewal.component';

describe('PaymentForRenewalComponent', () => {
  let component: PaymentForRenewalComponent;
  let fixture: ComponentFixture<PaymentForRenewalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentForRenewalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentForRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
