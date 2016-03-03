import {Pipe, PipeTransform} from 'angular2/core';
import {PercentPipe} from 'angular2/common';

@Pipe({name: 'bloodAlcohol'})
export class BloodAlcoholPipe implements PipeTransform {
  constructor(private _percentPipe : PercentPipe){}
    
  transform(value:number, args:string[]) : any {
    if (value <= 0) return "0% Stone Cold Sober";
    else {
        return this._percentPipe.transform(value, args);
    }
  }
}