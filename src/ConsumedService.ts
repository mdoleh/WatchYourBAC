import {Injectable} from 'angular2/core';
import {SerializerService} from './SerializerService';
import {Beer} from './ApiReturnTypes';

@Injectable()
export class ConsumedService {
	private _beers : Beer[] = [];
    
	constructor(private _serializerService : SerializerService) {}

	addBeer(beer : Beer, quantity : number = 1) {
		this.getState();
		beer.quantity = quantity;
		let index = this.getIndex(beer);
		if (index > -1) {
            // for some reason quantity may be a string (serialization/input issue?)
            // so we need to parseInt to make sure adding works correctly
			this._beers[index].quantity = parseInt(this._beers[index].quantity.toString()) + quantity;
		} else {
			this._beers.push(beer);
		}
		this._serializerService.storeData("ConsumedInfo", this._beers);
	}

	removeBeer(beer : Beer, index?: number) {
		this.getState();
		this._beers.splice(index != null ? index : this.getIndex(beer), 1);
		this._serializerService.storeData("ConsumedInfo", this._beers);
	}
	
	updateQuantity(beer : Beer, quantity : number) {
		this.getState();
		let index = this.getIndex(beer);
		if (quantity <= 0) this.removeBeer(beer, index);
		else this._beers[index].quantity = quantity;
		this._serializerService.storeData("ConsumedInfo", this._beers);
	}
	
	getState() {
		this.restoreConsumedData();
		return this._beers;
	}
	
	private getIndex(beer : Beer) : number {
        let index = this._beers.map(b => b.id).indexOf(beer.id);
		if (index === -1 || this._beers[index].size === beer.size) return index;
        else return -1;
	}

	private restoreConsumedData() {
	  if (!this._beers || !this._beers.length) {
		let consumedData : Beer[];
		consumedData = this._serializerService.getData("ConsumedInfo");
		if (consumedData) this._beers = consumedData;
	  }
	}
}