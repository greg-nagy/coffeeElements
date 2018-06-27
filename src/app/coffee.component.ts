import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'front-end-coffee',
  template: `
    <p>
      coffe works! every {{ time || "mornin'" }}
    </p>
  `,
  styles: ['p { border: 2px solid brown; }']
})
export class CoffeeComponent implements OnInit {

  @Input() time: string;

  constructor() { }

  ngOnInit() {
  }

}
