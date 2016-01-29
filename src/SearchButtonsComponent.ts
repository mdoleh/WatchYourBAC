import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: "search-buttons",
  styles: ['h1 {color: purple}'],
  template: `
    <div>
        <input type="button" value="Previous" (click)="onPreviousPage($event)" [disabled]="shouldDisablePrevious"/>
        <input type="button" value="Next" (click)="onNextPage($event)" [disabled]="shouldDisableNext"/>
    </div>
  `
})
export class SearchButtonsComponent {
    @Output() nextPage = new EventEmitter<{}>();
    @Output() previousPage = new EventEmitter<{}>();
    @Input() shouldDisableNext : boolean;
    @Input() shouldDisablePrevious : boolean;
    
    constructor() {}
    
    onPreviousPage($event) {
        this.previousPage.emit($event);
    }
    
    onNextPage($event) {
        this.nextPage.emit($event);
    }
}
