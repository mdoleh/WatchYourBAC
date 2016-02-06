import {Injectable} from 'angular2/core';

@Injectable()
export class SerializerService {
  constructor(){}
  
  storeData(key : string, value : Object) {
      var stringified = JSON.stringify(value);
      sessionStorage.setItem(key, stringified);
  }
  
  getData(key : string) {
      var data = sessionStorage.getItem(key);
      return JSON.parse(data);
  }
}