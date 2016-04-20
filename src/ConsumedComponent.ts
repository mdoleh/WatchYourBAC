import {Component, OnInit} from 'angular2/core';
import {BacService} from './BacService';
import {SerializerService} from './SerializerService';
import {ConsumedService} from './ConsumedService';
import {Beer} from './ApiReturnTypes';
import {Router} from 'angular2/router';
import {QuantityComponent} from './QuantityComponent';
import {BloodAlcoholPipe} from './BacPipe';
import {DecimalPipe} from 'angular2/common';

@Component({
  selector: "app",
  styleUrls: ['../styles/pages/consumedcomponent.css'],
  templateUrl: '../views/Consumed.html',
  providers: [BacService, SerializerService, ConsumedService, DecimalPipe],
  directives: [QuantityComponent],
  pipes: [BloodAlcoholPipe]
})
export class ConsumedComponent implements OnInit {
  private bac : number;
  
  constructor(private _bacService : BacService, 
		  private _consumedService : ConsumedService,
		  private _router: Router) {}
  
  consumedBeers : Beer[];
  
  ngOnInit() {
	this.consumedBeers = this._consumedService.getState();
    this.bac = this._bacService.calcBAC(this.computeTotalOzAlcohol());
  }
  
  computeTotalOzAlcohol() {
    let totalAlcohol : number = 0;
    this.consumedBeers.forEach(beer => {
        let abv = parseFloat(beer.abv);
        if (isNaN(abv)) totalAlcohol += 1 * beer.quantity;
        else totalAlcohol += parseInt(beer.size) * (abv / 100) * beer.quantity;
    });
    return totalAlcohol;
  }
  
  updateQuantity(beer : Beer) {
	this._consumedService.updateQuantity(beer, beer.quantity);
    this.updateBac();
  }
  
  removeBeer(beer : Beer) {
	this._consumedService.removeBeer(beer);
    this.updateBac();
  }
  
  updateBac() {
    this.consumedBeers = this._consumedService.getState();
    this.bac = this._bacService.calcBAC(this.computeTotalOzAlcohol());
  }
  
  getBACColor(bac : number) {
      if (bac <= 0) return "green";
      else if (bac > 0 && bac < 0.08) return "goldenrod";
      else if (bac >= 0.08) return "red";
      else return "";
  }
  
  goBack() {
	this._router.navigate(['BeerSearch']);
  }
}
