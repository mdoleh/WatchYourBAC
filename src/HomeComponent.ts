import {Component} from 'angular2/core';
import {BacService} from './BacService';
import {SerializerService} from './SerializerService';
import {Router} from 'angular2/router';
import {FORM_DIRECTIVES} from 'angular2/common';
import {RadioControlValueAccessor} from './RadioButtonAccessor';
import {Person} from './Person';

@Component({
  selector: "app",
  styles: ['h1 {color: purple}'],
  template: `
    <h1>Fill out your information</h1>
    <div>
        <input id="male" type="radio" name="gender" [(ngModel)]="model.gender" value="Male" /><label for="male">Male</label>
    </div>
    <div>
        <input id="female" type="radio" name="gender" [(ngModel)]="model.gender" value="Female" /><label for="female">Female</label>
    </div>
    <div>
        Body Weight: <input type="text" [(ngModel)]="model.bodyWeight" />
    </div>
    <div>
        Hours Drinking: <input type="text" [(ngModel)]="model.hoursDrinking" />
    </div>
    <input (click)="nextPage()" type="button" value="Next"/>
  `,
  directives: [FORM_DIRECTIVES, RadioControlValueAccessor],
  providers: [BacService, SerializerService]
})
export class HomeComponent {
    private model : Person;
    
    constructor(private _bacService : BacService,
    private _router: Router) {
        this.model = _bacService.getState();
    }
    
    nextPage() {
        // initialize the necessary data so we can use it later
        this._bacService.init(this.model);
        this._router.navigate(['BeerSearch']);
    }
}
