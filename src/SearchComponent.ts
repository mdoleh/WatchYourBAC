import {Component, OnInit} from 'angular2/core';
import {BeerService} from './BeerService';
import {API_RESPONSE_TEMPLATE} from './Constants';
import {Router} from 'angular2/router';

@Component({
  selector: "app",
  styles: ['h1 {color: red}'],
  template: `
    <h1>Beer Search</h1> <br />
    This data came from an API: 
    <div *ngFor="#beer of beers" class="api-data">
      <ul>
        <li (click)="beerSelected(beer.id)">{{beer.nameDisplay}}</li>
      </ul>
    </div>
  `,
  providers: [BeerService]
})
export class SearchComponent implements OnInit {
  constructor(
      private _beerService : BeerService,
      private _router: Router
  ){}
  beers = [API_RESPONSE_TEMPLATE];
  ngOnInit() {
    this._beerService.searchByName("par*")
      .subscribe(res => {
        this.beers = res.json().data;
    });
  }
  beerSelected(id: number) {
      this._router.navigate(['BeerDetails', {id: id}]);
  }
}
