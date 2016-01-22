import {Component} from 'angular2/core';
import {BacService} from './BacService';

@Component({
  selector: "app",
  styles: ['h1 {color: green}'],
  template: `
    <h1>Beers Consumed</h1>
  `,
  providers: []
})
export class ConsumedComponent {
  constructor(private _bacService : BacService){
      // the data we need is stored in the state of the service
      // just need to provide the oz of alcohol consumed
      console.log("BacService State:" + JSON.stringify(_bacService.getState()));
  }
}
