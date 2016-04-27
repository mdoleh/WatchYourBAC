import {Control} from 'angular2/common';
import {ValidationResult} from './ValidationResult';
   
var genderWasSelected : boolean = false;

export class GenderValidator {
    
    static genderSelected(control: Control) : ValidationResult {
        if ((!control.value || !control.value.checked) && !genderWasSelected) return { "genderNotSelected": true };
        genderWasSelected = true;
        return null;
    }
}