import {Component, Input} from '@angular/core'


@Component({
  selector:"my-greeting",
  template: `<h2>{{greet}}</h2>`,
  styles: [`h2 { font-family: Lato; }`]

})
export class GreetingComponent{
@Input() greet:string;
}
