import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { SearchWallpaperComponent } from './search-wallpaper/search-wallpaper.component';
import { TrendVideoComponent } from './trend-video/trend-video.component';
import { TrendAudioComponent } from './trend-audio/trend-audio.component';
import { TrendPhotoComponent } from './trend-photo/trend-photo.component';
import { TrendTextComponent } from './trend-text/trend-text.component';
import { HomeComponent } from './home.component';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material';

// Pipes
import { SafePipe } from './pipes/safe.pipe';
import { SearchTagsComponent } from './search-tags/search-tags.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatCardModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
  ],
  declarations: [
    SearchWallpaperComponent,
    TrendVideoComponent,
    TrendAudioComponent,
    TrendPhotoComponent,
    TrendTextComponent,
    HomeComponent,
    SafePipe,
    SearchTagsComponent,
  ],
  exports: [HomeComponent],
})
export class HomeModule { }
