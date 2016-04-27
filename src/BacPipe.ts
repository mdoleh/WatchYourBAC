import {Pipe, PipeTransform} from 'angular2/core';
import {DecimalPipe} from 'angular2/common';

@Pipe({name: 'bloodAlcohol'})
export class BloodAlcoholPipe implements PipeTransform {
  constructor(private _decimalPipe : DecimalPipe){}
    
  transform(value:number, args:string[]) : any {
    let stringValue = "";
    if (isNaN(value) || !isFinite(value)) return "Please fill in your information.";
    if (value <= 0) stringValue = "0% Stone Cold Sober";
    else stringValue = this._decimalPipe.transform(value, "1.3-5") + "%";
    if (value > 0.08) stringValue += " Over the Limit!";
    return stringValue;
  }
}