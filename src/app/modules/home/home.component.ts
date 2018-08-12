import { Component, OnInit } from '@angular/core';
import { GenerateIdService } from '../../core/services/generate-id.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prefix: string;
  uniqueId: string;

  constructor(private generateIdService: GenerateIdService) {
    this.prefix = 'home';
  }

  ngOnInit() {
    this.uniqueId = this.generateIdService.generateUniqueId(this.prefix);
  }

  genId(num: number) {
    return this.generateIdService.generateId(this.uniqueId, `${num}`);
  }

}
