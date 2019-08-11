import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}! and {{welcome}}. My name is {{personName}}</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent {
  @Input() name: string;
  @Input() welcome: string;
  @Input() personName: string;
  
}
