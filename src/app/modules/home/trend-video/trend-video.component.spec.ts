import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendVideoComponent } from './trend-video.component';

describe('TrendVideoComponent', () => {
  let component: TrendVideoComponent;
  let fixture: ComponentFixture<TrendVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
