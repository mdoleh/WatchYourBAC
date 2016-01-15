import {Component} from 'angular2/core';
import {BeerService} from 'src/BeerService';
import {API_RESPONSE_TEMPLATE} from 'src/Constants';
import {HTTP_PROVIDERS} from 'angular2/http';

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
  // putting HTTP_PROVIDERS here doesn't seem right
  // Http is only required by the service so why
  // should the dependencies be injected here?
  // look into finding an alternate place for it
  providers: [BeerService, HTTP_PROVIDERS]
})
export class App implements OnInit {
  constructor(private _beerService : BeerService){}
  name : string = "WatchYourBAC";
  beers : array = [API_RESPONSE_TEMPLATE];
  ngOnInit() {
    this._beerService.searchByName("bud*")
      .subscribe(res => {
        this.beers = res.json().data;
      });
    });
  }
}
