import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {BeerService} from './BeerService';
import {Beer} from './ApiReturnTypes';
import {SerializerService} from './SerializerService';
import {ConsumedService} from './ConsumedService';
import {QuantityComponent} from './QuantityComponent';
import {RadioControlValueAccessor} from './RadioButtonAccessor';

@Component({
  selector: "app",
  styles: ['h1 {color: orange}'],
  templateUrl: '../views/BeerDetails.html',
  providers: [BeerService, SerializerService, ConsumedService],
  directives: [QuantityComponent, RadioControlValueAccessor]
})
export class BeerDetailsComponent implements OnInit {
  private beerId : string;
    
  constructor(
      private _beerService : BeerService,
      private _serializerService : SerializerService,
	  private _consumedService : ConsumedService,
	  private _router: Router,
      routeParams: RouteParams)
  {
      this.beerId = routeParams.get("id");
  }
  private beer = new Beer();
  
  ngOnInit() {
    // service call to get beer by id and use results in template
    this._beerService.searchById(this.beerId)
    .subscribe(res => {
        this.beer = res.json().data;
		this.beer.quantity = 1;
        this.beer.size = "16";
    });
  }
  
  addBeer() {
    this._consumedService.addBeer(this.beer, this.beer.quantity);
    let searchTerm = this._serializerService.getData("LastSearchTerm");
    searchTerm = searchTerm ? searchTerm : "";
    this._router.navigate(['BeerSearchId', {id: searchTerm}]);
  }
  
  goBack() {
	this._router.navigate(['BeerSearch']);
  }
}
