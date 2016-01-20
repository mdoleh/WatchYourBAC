import {Component} from 'angular2/core';
import {BeerService} from './BeerService';
import {API_RESPONSE_TEMPLATE} from './Constants';

@Component({
  selector: "app",
  styles: ['.api-data {color: blue}'],
  template: `
    <label>Name:</label>
    <input type="text" [(ngModel)]="name" placeholder="Enter a name here">
    <hr>
    <h1 [hidden]="!name">Hello {{name}}!</h1>
    <hr><br />
    This data came from an API: 
    <div *ngFor="#beer of beers" class="api-data">
      <ul>
        <li>{{beer.nameDisplay}}</li>
      </ul>
    </div>
  `,
  providers: [BeerService]
})
export class App implements OnInit {
  constructor(private _beerService : BeerService){}
  name : string = "WatchYourBAC";
  beers = [API_RESPONSE_TEMPLATE];
  ngOnInit() {
    this._beerService.searchByName("bud*")
      .subscribe(res => {
        this.beers = res.json().data;
    });
  };
}
