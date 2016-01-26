import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {API_RESPONSE_TEMPLATE} from './Constants';
import {BeerService} from './BeerService';

@Component({
  selector: "app",
  styles: ['h1 {color: orange}'],
  template: `
    <h1>Beer  Details</h1>
    <div>beer ID: {{beerId}}</div>
    <div>Name: {{beer.nameDisplay}}</div>
    <div>Description: {{beer.description}}</div>
    <div>ABV: {{beer.abv}}</div>
  `,
  providers: [BeerService]
})
export class BeerDetailsComponent implements OnInit {
  private beerId : string;
    
  constructor(
      private _beerService : BeerService,
      routeParams: RouteParams){
      this.beerId = routeParams.get("id")
  }
  beer = [API_RESPONSE_TEMPLATE];
  ngOnInit() {
      // service call to get beer by id and use results in template
    this._beerService.searchById(this.beerId)
      .subscribe(res => {
        this.beer = res.json().data;
    });
  }
}
