import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {RadioButtonState, FORM_DIRECTIVES} from 'angular2/common';
import {BeerService} from './BeerService';
import {Beer} from './ApiReturnTypes';
import {SerializerService} from './SerializerService';
import {ConsumedService} from './ConsumedService';
import {QuantityComponent} from './QuantityComponent';

@Component({
  selector: "app",
  styleUrls: ["../styles/pages/beerdetailscomponent.css"],
  templateUrl: '../views/BeerDetails.html',
  providers: [BeerService, SerializerService, ConsumedService],
  directives: [QuantityComponent]
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
      this.beerSize.push(new RadioButtonState(false, "12"));
      this.beerSize.push(new RadioButtonState(true, "16"));
  }
  private beer = new Beer();
  private beerSize = [];
  
  ngOnInit() {
    // service call to get beer by id and use results in template
    this._beerService.searchById(this.beerId)
    .subscribe(res => {
        this.beer = res.json().data;
		this.beer.quantity = 1;
    });
  }
  
  addBeer() {
    this.beer.size = this.getRadioValue();
    this._consumedService.addBeer(this.beer, this.beer.quantity);
    let searchTerm = this._serializerService.getData("LastSearchTerm");
    searchTerm = searchTerm ? searchTerm : "";
    this._router.navigate(['BeerSearchId', {id: searchTerm}]);
  }
  
  goBack() {
	this._router.navigate(['BeerSearch']);
  }
  
  getRadioValue() : string {
      for (let i = 0; i < this.beerSize.length; ++i) {
          if (this.beerSize[i].checked) return this.beerSize[i].value;
      }
  }
}
