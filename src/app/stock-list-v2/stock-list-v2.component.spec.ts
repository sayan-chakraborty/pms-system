import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockListV2Component } from './stock-list-v2.component';

describe('StockListV2Component', () => {
  let component: StockListV2Component;
  let fixture: ComponentFixture<StockListV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockListV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockListV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
