import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendTextComponent } from './trend-text.component';

describe('TrendTextComponent', () => {
  let component: TrendTextComponent;
  let fixture: ComponentFixture<TrendTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
