import {Component, OnInit} from 'angular2/core';
import {BeerService} from './BeerService';
import {Router} from 'angular2/router';
import {RawResponse, Beer} from './ApiReturnTypes';
import {SearchButtonsComponent} from './SearchButtonsComponent';
import {SerializerService} from './SerializerService';

@Component({
  selector: "app",
  styles: ['h1 {color: red}'],
  template: `
    <h1>Beer Search</h1> <br />
    Search: <input [(ngModel)]="beerName"/>
    <input (click)="search(beerName)" type="button" value="Search" />
    <input (click)="reset()" type="button" value="Clear" />
    <search-buttons (previousPage)="previousPage(beerName, rawResponse.currentPage)" (nextPage)="nextPage(beerName, rawResponse.currentPage)" [shouldDisableNext]="!canPageForward()" [shouldDisablePrevious]="!canPageBackward()"></search-buttons>
    <div *ngIf="rawResponse.numberOfPages">Viewing page {{rawResponse.currentPage}} of {{rawResponse.numberOfPages}}</div>
    <ul *ngFor="#beer of beers" class="api-data">
      <li (click)="beerSelected(beer.id)">{{beer.nameDisplay}}</li>
    </ul>
    <search-buttons *ngIf="rawResponse.numberOfPages" (previousPage)="previousPage(beerName, rawResponse.currentPage)" (nextPage)="nextPage(beerName, rawResponse.currentPage)" [shouldDisableNext]="!canPageForward()" [shouldDisablePrevious]="!canPageBackward()"></search-buttons>
  `,
  providers: [BeerService, SerializerService],
  directives: [SearchButtonsComponent]
})
export class SearchComponent implements OnInit {
    private beerName : string;
    beers : Beer[];
    rawResponse : RawResponse = new RawResponse();
    callComplete : boolean = false;
    
    constructor(
        private _beerService : BeerService,
        private _serializerService : SerializerService,
        private _router: Router
    ){}
  
    ngOnInit() {
        this.reset();
    }

    search(value : string) {
        if (value) {
            this.searchBeer(value);
        } else {
            this.reset();
        }
    }
    
    reset() {
        this.beers = [];
        this.beerName = "";
        this.rawResponse.numberOfPages = 0;
        this.rawResponse.currentPage = 0;
    }
    
    nextPage(beerName : string, currentPage : number) {
        this.searchBeer(beerName, currentPage + 1);
    }
    
    previousPage(beerName : string, currentPage : number) {
        this.searchBeer(beerName, currentPage - 1);
    }
    
    private searchBeer(beerName : string, pageNumber : number = 1) {
        this.callComplete = false;
        this._serializerService.storeStringData("LastSearchTerm", beerName);
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
