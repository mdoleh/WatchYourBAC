import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {BeerService} from './BeerService';
import {Beer} from './ApiReturnTypes';
import {SerializerService} from './SerializerService';
import {ConsumedService} from './ConsumedService';

@Component({
  selector: "app",
  styles: ['h1 {color: orange}'],
  template: `
    <h1>Beer  Details</h1>
    <div>beer ID: {{beerId}}</div>
    <div async>Name: {{beer.nameDisplay}}</div>
    <div>Description: {{beer.description}}</div>
    <div>Alcohol by Volume: {{beer.abv}}</div>
	<input (click)="addBeer()" type="button" value="Add Beer" />
  `,
  providers: [BeerService, SerializerService, ConsumedService]
})
export class BeerDetailsComponent implements OnInit {
  private beerId : string;
    
  constructor(
      private _beerService : BeerService,
	  private _consumedService : ConsumedService,
	  private _router: Router,
      routeParams: RouteParams)
  {
      this.beerId = routeParams.get("id");
  }
  beer = new Beer();
  
  ngOnInit() {
    // service call to get beer by id and use results in template
    this._beerService.searchById(this.beerId)
    .subscribe(res => {
        this.beer = res.json().data;
    });
  }
  
  addBeer() {
	this._consumedService.addBeer(this.beer);
	this._router.navigate(['BeerSearch']);
  }
}
