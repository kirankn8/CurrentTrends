import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class GenerateIdService {

  constructor() { }

  generateUniqueId(prefix: string) {
    return prefix + '-' + uuid();
  }

  generateId(uniqueId: string, suffix: string) {
    return uniqueId.replace(/.$/, suffix);
  }

}
