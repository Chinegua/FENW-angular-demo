import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  template: `<p>HOLA {{name}}</p>`
})
export class PruebaComponent {
  name: string;
  constructor(private router: Router, activatedRoute: ActivatedRoute) {
    this.name = 'Aitor Benral';
  }
}
