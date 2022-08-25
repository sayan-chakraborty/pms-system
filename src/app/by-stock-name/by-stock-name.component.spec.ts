import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByStockNameComponent } from './by-stock-name.component';

describe('ByStockNameComponent', () => {
  let component: ByStockNameComponent;
  let fixture: ComponentFixture<ByStockNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByStockNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByStockNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
