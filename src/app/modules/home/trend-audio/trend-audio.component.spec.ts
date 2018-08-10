import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendAudioComponent } from './trend-audio.component';

describe('TrendAudioComponent', () => {
  let component: TrendAudioComponent;
  let fixture: ComponentFixture<TrendAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
