import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sub-comp',
  template: `<h3>sub-component</h3>
             <p>{{subComponentProperty}}</p>
             <p><button (click)='event()'>event</button>`
})
export class SubCompComponent {

  @Input() subComponentProperty: String;

  @Output() subComponentEvent = new EventEmitter<string>();

  event() {
    this.subComponentEvent.emit('valueOfSon');
  }
}
