import {Component, OnInit} from 'angular2/core';
import {BacService} from './BacService';
import {SerializerService} from './SerializerService';
import {ConsumedService} from './ConsumedService';
import {Beer} from './ApiReturnTypes';
import {Router} from 'angular2/router';

@Component({
  selector: "app",
  styles: ['h1 .updated {color: green}', 'input[type="text"] {width: 20px}'],
  template: `
    <h1>Beers Consumed</h1>
	<ul *ngFor="#beer of consumedBeers">
		<li>{{beer.nameDisplay}}
			<div>
				Quantity: <input maxlength="2" [(ngModel)]="beer.quantity" type="text" />
				<input type="button" (click)="updateQuantity(beer)" value="Update" />
				<input type="button" (click)="removeBeer(beer)" value="Remove" />
			</div>
		</li>
	</ul>
	<input type="button" (click)="goBack()" value="< Back" />
  `,
  providers: [BacService, SerializerService, ConsumedService]
})
export class ConsumedComponent implements OnInit {
  constructor(private _bacService : BacService, 
		  private _consumedService : ConsumedService,
		  private _router: Router) {}
  
  consumedBeers : Beer[];
  
  ngOnInit() {
	this.consumedBeers = this._consumedService.getState();
  }
  
  updateQuantity(beer : Beer) {
	this._consumedService.updateQuantity(beer, beer.quantity);
  }
  
  removeBeer(beer : Beer) {
	this._consumedService.removeBeer(beer);
  }
  
  goBack() {
	this._router.navigate(['BeerSearch']);
  }
}
