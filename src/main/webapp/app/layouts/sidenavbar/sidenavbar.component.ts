import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { EventEmitterService } from 'app/layouts/event-emitter.service';

@Component({
  selector: 'jhi-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {
  @HostBinding('class.is-open')
  @Input()
  isExpanded: Boolean = false;
  constructor(private eventEmitterService: EventEmitterService) {
    eventEmitterService.spinEmitter.subscribe((n: Boolean) => {
      this.isExpanded = !this.isExpanded;
    });
  }

  ngOnInit() {}
}
