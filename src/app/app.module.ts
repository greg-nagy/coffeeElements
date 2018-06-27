import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoffeeComponent } from './coffee.component';

import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent, CoffeeComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
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
