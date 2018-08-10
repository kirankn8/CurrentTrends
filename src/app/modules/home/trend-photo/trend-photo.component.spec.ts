import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendPhotoComponent } from './trend-photo.component';

describe('TrendPhotoComponent', () => {
  let component: TrendPhotoComponent;
  let fixture: ComponentFixture<TrendPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
