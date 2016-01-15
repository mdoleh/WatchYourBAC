import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {API_URL, API_KEY} from 'src/Constants';

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
    let urlParams : string = "?name=" + beerName + "&key=";
    return this._http.get(API_URL + urlParams + API_KEY);
  }
  searchById(beerId : string){
    let urlParams : string = "beer/id=" + beerId + "?key=";
    return this._http.get(API_URL + urlParams + API_KEY);
  }
}