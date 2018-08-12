import { Component, OnInit } from '@angular/core';
import { GenerateIdService } from '../../../core/services/generate-id.service';

@Component({
  selector: 'app-trend-text',
  templateUrl: './trend-text.component.html',
  styleUrls: ['./trend-text.component.css']
})
export class TrendTextComponent implements OnInit {

  prefix: string;
  uniqueId: string;

  constructor(private generateIdService: GenerateIdService) {
    this.prefix = 'text';
  }

  ngOnInit() {
    this.uniqueId = this.generateIdService.generateUniqueId(this.prefix);
  }

  genId(num: number) {
    return this.generateIdService.generateId(this.uniqueId, `${num}`);
  }

}
