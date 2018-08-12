import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { GenerateIdService } from '../../../core/services/generate-id.service';

export interface SearchTerms {
  name: string;
}

@Component({
  selector: 'app-search-tags',
  templateUrl: './search-tags.component.html',
  styleUrls: ['./search-tags.component.css']
})
export class SearchTagsComponent implements OnInit {


  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  searchTerms: SearchTerms[] = [];
  prefix: string;
  uniqueId: string;

  constructor(private generateIdService: GenerateIdService) {
    this.prefix = 'tags';
  }

  ngOnInit() {
    this.uniqueId = this.generateIdService.generateUniqueId(this.prefix);
  }

  genId(num: number) {
    return this.generateIdService.generateId(this.uniqueId, `${num}`);
  }

  add(value: string): void {
    // Add our search term
    if ((value || '').trim()) {
      this.searchTerms.push({ name: value.trim() });
    }
  }

  remove(searchTerms: SearchTerms): void {
    const index = this.searchTerms.indexOf(searchTerms);

    if (index >= 0) {
      this.searchTerms.splice(index, 1);
    }
  }
}
