import {Component} from 'angular2/core';
import {BacService} from './BacService';
import {SerializerService} from './SerializerService';
import {Router} from 'angular2/router';
import {FORM_DIRECTIVES, RadioButtonState, Control, ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {Person} from './Person';
import {GenderValidator} from './GenderValidator';

@Component({
  selector: "app",
  styleUrls: ['../styles/pages/homecomponent.css'],
  templateUrl: '../views/Home.html',
  directives: [FORM_DIRECTIVES],
  providers: [BacService, SerializerService]
})
export class HomeComponent {
    private model : Person;
    private gender = [];
    
    bodyWeightControl: Control;
    hoursDrinkingControl: Control;
    genderControl : Control;
    form : ControlGroup;
    
    constructor(private _bacService : BacService,
    private _router: Router,
    private builder: FormBuilder) {
        this.model = _bacService.getState();
        this.gender.push(new RadioButtonState(this.model.gender === "Male", "Male"));
        this.gender.push(new RadioButtonState(this.model.gender === "Female", "Female"));
        
        this.bodyWeightControl = new Control('', Validators.required);
        this.hoursDrinkingControl = new Control('', Validators.required);
        this.genderControl = new Control('', GenderValidator.genderSelected);
        this.form = builder.group({
            bodyWeightControl: this.bodyWeightControl,
            hoursDrinkingControl: this.hoursDrinkingControl,
            genderControl: this.genderControl
        });
    }
    
    nextPage() {
        // initialize the necessary data so we can use it later
        this.model.gender = this.getRadioValue();
        this._bacService.init(this.model);
        this._router.navigate(['BeerSearch']);
    }
    
    private getRadioValue() : string {
        for (let i = 0; i < this.gender.length; ++i) {
            if (this.gender[i].checked) return this.gender[i].value;
        }
    }
}