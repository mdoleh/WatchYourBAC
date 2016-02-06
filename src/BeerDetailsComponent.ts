import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {BeerService} from './BeerService';
import {Beer} from './ApiReturnTypes';
import {SerializerService} from './SerializerService';
import {ConsumedService} from './ConsumedService';
import {QuantityComponent} from './QuantityComponent';

@Component({
  selector: "app",
  styles: ['h1 {color: orange}'],
  template: `
    <h1>Beer  Details</h1>
    <div>beer ID: {{beerId}}</div>
    <div async>Name: {{beer.nameDisplay}}</div>
    <div>Description: {{beer.description}}</div>
    <div>Alcohol by Volume: {{beer.abv}}</div>
	<quantity-controls [(quantityModel)]="beer.quantity" shouldHideUpdate="true" shouldHideRemove="true"></quantity-controls>
    <input type="button" (click)="goBack()" value="< Back" />
	<input (click)="addBeer()" type="button" value="Add Beer" />
  `,
  providers: [BeerService, SerializerService, ConsumedService],
  directives: [QuantityComponent]
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
		this.beer.quantity = 1;
    });
  }
  
  addBeer() {
	this._consumedService.addBeer(this.beer, this.beer.quantity);
	this._router.navigate(['BeerSearch']);
  }
  
  goBack() {
	this._router.navigate(['BeerSearch']);
  }
}
