import { Component } from '@angular/core';

@Component({
  template: `
    <h2>Routing</h2>
    <ul>
      <li><a [routerLink]="['/route', 1]">Route 1</a></li>
      <li><a [routerLink]="['/route', 2]">Route 2</a></li>
      <li><a [routerLink]="['/route', 3]">Route 3</a></li>
    </ul>`
})
export class HomeComponent { }
