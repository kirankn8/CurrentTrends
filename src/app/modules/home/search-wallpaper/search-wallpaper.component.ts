import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GenerateIdService } from '../../../core/services/generate-id.service';

@Component({
  selector: 'app-search-wallpaper',
  templateUrl: './search-wallpaper.component.html',
  styleUrls: ['./search-wallpaper.component.css']
})
export class SearchWallpaperComponent implements OnInit {

  @Output() searchTerm = new EventEmitter<string>();
  searchTrends = new FormControl('');

  prefix: string;
  uniqueId: string;

  constructor(private generateIdService: GenerateIdService) {
    this.prefix = 'search';
  }

  ngOnInit() {
    this.uniqueId = this.generateIdService.generateUniqueId(this.prefix);
  }

  genId(num: number) {
    return this.generateIdService.generateId(this.uniqueId, `${num}`);
  }

  onEnter() {
    this.searchTerm.emit(this.searchTrends.value);
    this.searchTrends.reset('');
  }
}
