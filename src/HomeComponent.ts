import {Component} from 'angular2/core';
import {BacService} from './BacService';
import {SerializerService} from './SerializerService';
import {Router} from 'angular2/router';
import {FORM_DIRECTIVES} from 'angular2/common';
import {RadioControlValueAccessor} from './RadioButtonAccessor';
import {Person} from './Person';

@Component({
  selector: "app",
  styleUrls: ['../styles/styles.css', '../styles/forms.css'],
  templateUrl: '../views/Home.html',
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
