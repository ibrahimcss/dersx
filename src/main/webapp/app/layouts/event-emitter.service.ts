import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  public spinEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor() {}
}
