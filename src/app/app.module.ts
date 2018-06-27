import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { CoffeeComponent } from './coffee.component';

import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [CoffeeComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [CoffeeComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const CoffeeElement = createCustomElement(CoffeeComponent, {
      injector: this.injector
    });

    customElements.define('front-end-coffee', CoffeeElement);
  }
}
