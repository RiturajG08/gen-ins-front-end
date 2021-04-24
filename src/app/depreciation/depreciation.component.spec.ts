import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepreciationComponent } from './depreciation.component';

describe('DepreciationComponent', () => {
  let component: DepreciationComponent;
  let fixture: ComponentFixture<DepreciationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepreciationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepreciationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
