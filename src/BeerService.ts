import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {API_URL, API_KEY} from './Constants';

@Injectable()
export class BeerService {
  constructor(private _http: Http) {}
  // test to show the api call works
  apiTest() {
    // http.get returns an Observable object
    // more info here: 
    // https://angular.io/docs/ts/latest/api/http/Http-class.html
    return this._http.get(API_URL + "?key=" + API_KEY);
  }
  // wildcard searching is allowed through the use of *
  searchByName(beerName : string){
    let urlParams : string = "beerByName/?name=" + beerName;
    return this._http.get(API_URL + urlParams);
  }
  searchById(beerId : string){
    let urlParams : string = "beerById?id=" + beerId;
    return this._http.get(API_URL + urlParams);
  }
}