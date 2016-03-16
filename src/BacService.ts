import {Injectable} from 'angular2/core';
import {Person} from './Person';
import {SerializerService} from './SerializerService';

@Injectable()
export class BacService {
  private _person : Person = {
      bodyWeight: null,
      hoursDrinking: null,
      gender: ""
  };
    
  constructor(private _serializerService : SerializerService) {}
  
  init(person : Person) {
      this._person = person;
      this._serializerService.storeData("UserInfo", this._person);
  }
  
  calcBAC(ozAlcohol : number) {
    this.restoreUserData();
    let alcoholConstant = this._person.gender === "Male" ? 0.73 : 0.66;
    return (ozAlcohol * 5.14/this._person.bodyWeight * alcoholConstant) - 0.015 * this._person.hoursDrinking;
  }
  
  getState() {
      this.restoreUserData();
      return this._person;
  }
  
  private restoreUserData() {
	  if (!this._person || !this._person.gender) {
        let userData : Person;
        userData = this._serializerService.getData("UserInfo");
        if (userData) this._person = userData;
      }
  }
}