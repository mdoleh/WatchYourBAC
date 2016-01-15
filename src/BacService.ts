import {Injectable} from 'angular2/core';

@Injectable()
export class BacService {
  calcBAC(ozAlcohol : number, bodyWeight : number, isMan : boolean, hoursPassed : number) {
    return (ozAlcohol * 5.14/bodyWeight * (isMan ? 0.73 : 0.66)) - 0.015 * hoursPassed;
  }
}