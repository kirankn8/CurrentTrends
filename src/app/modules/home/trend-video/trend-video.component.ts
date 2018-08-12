import { Component, OnInit, Input } from '@angular/core';
import { GenerateIdService } from '../../../core/services/generate-id.service';

@Component({
  selector: 'app-trend-video',
  templateUrl: './trend-video.component.html',
  styleUrls: ['./trend-video.component.css']
})
export class TrendVideoComponent implements OnInit {

  @Input() videoSrc: string;
  prefix: string;
  uniqueId: string;

  constructor(private generateIdService: GenerateIdService) {
    this.prefix = 'video';
  }

  ngOnInit() {
    this.uniqueId = this.generateIdService.generateUniqueId(this.prefix);
  }

  genId(num: number) {
    return this.generateIdService.generateId(this.uniqueId, `${num}`);
  }

}
