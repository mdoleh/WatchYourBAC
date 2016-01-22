import {Injectable} from 'angular2/core';
import {Person} from './Person';

@Injectable()
export class BacService {
  private _person : Person = {
      bodyWeight: 0,
      hoursDrinking: 0,
      gender: ""
  };
    
  constructor() {}
  
  init(person : Person) {
      this._person = person;
  }
  
  calcBAC(ozAlcohol : number) {
    return (ozAlcohol * 5.14/this._person.bodyWeight * (this._person.gender === "Male" ? 0.73 : 0.66)) - 0.015 * this._person.hoursDrinking;
  }
  
  getState() {
      return this._person;
  }
}