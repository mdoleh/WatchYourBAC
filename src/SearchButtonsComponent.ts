import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: "search-buttons",
  styles: ['h1 {color: purple}'],
  templateUrl: '../views/widgets/SearchButtons.html'
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
