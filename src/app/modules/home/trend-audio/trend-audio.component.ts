import { Component, OnInit } from '@angular/core';
import { GenerateIdService } from '../../../core/services/generate-id.service';

@Component({
  selector: 'app-trend-audio',
  templateUrl: './trend-audio.component.html',
  styleUrls: ['./trend-audio.component.css']
})
export class TrendAudioComponent implements OnInit {

  prefix: string;
  uniqueId: string;

  constructor(private generateIdService: GenerateIdService) {
    this.prefix = 'audio';
  }

  ngOnInit() {
    this.uniqueId = this.generateIdService.generateUniqueId(this.prefix);
  }

  genId(num: number) {
    return this.generateIdService.generateId(this.uniqueId, `${num}`);
  }
}
