import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWallpaperComponent } from './search-wallpaper.component';

describe('SearchWallpaperComponent', () => {
  let component: SearchWallpaperComponent;
  let fixture: ComponentFixture<SearchWallpaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchWallpaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWallpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
