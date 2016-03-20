import {Component} from 'angular2/core';
import {BacService} from './BacService';
import {SerializerService} from './SerializerService';
import {Router} from 'angular2/router';
import {FORM_DIRECTIVES, RadioButtonState} from 'angular2/common';
import {Person} from './Person';

@Component({
  selector: "app",
  styleUrls: [''],
  templateUrl: '../views/Home.html',
  directives: [FORM_DIRECTIVES],
  providers: [BacService, SerializerService]
})
export class HomeComponent {
    private model : Person;
    private gender = [];
    
    constructor(private _bacService : BacService,
    private _router: Router) {
        this.model = _bacService.getState();
        this.gender.push(new RadioButtonState(this.model.gender === "Male" ? true : false, "Male"));
        this.gender.push(new RadioButtonState(this.model.gender === "Female" ? true : false, "Female"));
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
