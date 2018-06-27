import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'front-end-coffee',
  template: `
    <p>
      coffe works! every {{ time || "mornin'" }}
    </p>
  `,
  styles: ['p { border: 2px solid brown; }'],
  encapsulation: ViewEncapsulation.Native
})
export class CoffeeComponent implements OnInit {

  @Input() time: string;

  constructor() { }

  ngOnInit() {
  }

}
