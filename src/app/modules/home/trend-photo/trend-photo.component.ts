import { Component, OnInit, Input } from '@angular/core';
import { GenerateIdService } from '../../../core/services/generate-id.service';

@Component({
  selector: 'app-trend-photo',
  templateUrl: './trend-photo.component.html',
  styleUrls: ['./trend-photo.component.css']
})
export class TrendPhotoComponent implements OnInit {

  @Input() imageSrc: string;
  prefix: string;
  uniqueId: string;

  constructor(private generateIdService: GenerateIdService) {
    this.prefix = 'photo';
  }

  ngOnInit() {
    this.uniqueId = this.generateIdService.generateUniqueId(this.prefix);
  }

  genId(num: number) {
    return this.generateIdService.generateId(this.uniqueId, `${num}`);
  }
}
