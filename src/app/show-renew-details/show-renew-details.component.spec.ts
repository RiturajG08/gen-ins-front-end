import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRenewDetailsComponent } from './show-renew-details.component';

describe('ShowRenewDetailsComponent', () => {
  let component: ShowRenewDetailsComponent;
  let fixture: ComponentFixture<ShowRenewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRenewDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRenewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
