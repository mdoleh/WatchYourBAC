import {Component} from 'angular2/core';

@Component({
  selector: "app",
  styles: ['h1 {color: green}'],
  template: `
    <h1>Beers Consumed</h1>
  `,
  providers: []
})
export class ConsumedComponent {
  constructor(){}
}
