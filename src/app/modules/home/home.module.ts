import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchWallpaperComponent } from './search-wallpaper/search-wallpaper.component';
import { TrendVideoComponent } from './trend-video/trend-video.component';
import { TrendAudioComponent } from './trend-audio/trend-audio.component';
import { TrendPhotoComponent } from './trend-photo/trend-photo.component';
import { TrendTextComponent } from './trend-text/trend-text.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchWallpaperComponent, TrendVideoComponent, TrendAudioComponent, TrendPhotoComponent, TrendTextComponent, HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule { }
