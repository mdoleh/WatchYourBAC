import {Component, OnInit} from 'angular2/core';
import {BacService} from './BacService';
import {SerializerService} from './SerializerService';
import {ConsumedService} from './ConsumedService';
import {Beer} from './ApiReturnTypes';
import {Router} from 'angular2/router';
import {QuantityComponent} from './QuantityComponent';
import {BloodAlcoholPipe} from './BacPipe';
import {PercentPipe} from 'angular2/common';

@Component({
  selector: "app",
  styles: ['h1 .updated {color: green}', 'input[type="text"] {width: 20px}'],
  template: `
    <h1>Beers Consumed</h1>
	<ul *ngFor="#beer of consumedBeers">
		<li>{{beer.nameDisplay}} {{beer.size}}oz
			<quantity-controls [(quantityModel)]="beer.quantity" (updateQuantity)="updateQuantity(beer)" (removeItem)="removeBeer(beer)"></quantity-controls>
		</li>
	</ul>
    <div><label>Blood Alcohol Concentration (BAC):</label>{{bac | bloodAlcohol}}</div>
	<input type="button" (click)="goBack()" value="< Back" />
  `,
  providers: [BacService, SerializerService, ConsumedService, PercentPipe],
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
  
  goBack() {
	this._router.navigate(['BeerSearch']);
  }
}
