import {Component, OnInit} from 'angular2/core';
import {BeerService} from './BeerService';
import {Router} from 'angular2/router';
import {RawResponse, Beer} from './ApiReturnTypes';
import {SearchButtonsComponent} from './SearchButtonsComponent';

@Component({
  selector: "app",
  styles: ['h1 {color: red}'],
  template: `
    <h1>Beer Search</h1> <br />
    Search: <input #beerItem (keyup)="onKey(beerItem.value)" />
    <search-buttons (previousPage)="previousPage(beerItem.value, rawResponse.currentPage)" (nextPage)="nextPage(beerItem.value, rawResponse.currentPage)" [shouldDisableNext]="!canPageForward()" [shouldDisablePrevious]="!canPageBackward()"></search-buttons>
    <div *ngIf="rawResponse.numberOfPages">Viewing page {{rawResponse.currentPage}} of {{rawResponse.numberOfPages}}</div>
    <div *ngFor="#beer of beers" class="api-data">
      <ul>
        <li (click)="beerSelected(beer.id)">{{beer.nameDisplay}}</li>
      </ul>
    </div>
    <search-buttons *ngIf="rawResponse.numberOfPages" (previousPage)="previousPage(beerItem.value, rawResponse.currentPage)" (nextPage)="nextPage(beerItem.value, rawResponse.currentPage)" [shouldDisableNext]="!canPageForward()" [shouldDisablePrevious]="!canPageBackward()"></search-buttons>
  `,
  providers: [BeerService],
  directives: [SearchButtonsComponent]
})
export class SearchComponent implements OnInit {
    constructor(
        private _beerService : BeerService,
        private _router: Router
    ){}
    beerName : string;
    beers : Beer[];
    rawResponse : RawResponse = new RawResponse();
    callComplete : boolean = false;
  
    ngOnInit() {
        this.rawResponse.currentPage = 0;
    }

    onKey(value : string) {
        if (value) {
            this.searchBeer(value);
        } else {
            this.beers = [];
        }
    }
    
    nextPage(beerName : string, currentPage : number) {
        this.searchBeer(beerName, currentPage + 1);
    }
    
    previousPage(beerName : string, currentPage : number) {
        this.searchBeer(beerName, currentPage - 1);
    }
    
    private searchBeer(beerName : string, pageNumber : number = 1) {
        this.callComplete = false;
        this._beerService.searchByName(beerName, pageNumber)
        .subscribe(res => {
            this.rawResponse = res.json();
            this.beers = this.rawResponse.data;
            this.callComplete = true;
        });
    }
    
    private canPageForward() {
        return this.rawResponse.currentPage < this.rawResponse.numberOfPages && this.callComplete;
    }
    
    private canPageBackward() {
        return this.rawResponse.currentPage > 1 && this.callComplete;
    }
    
    beerSelected(id: number) {
        this._router.navigate(['BeerDetails', {id: id}]);
    }
}
