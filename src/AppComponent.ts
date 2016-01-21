import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './HomeComponent';
import {SearchComponent} from './SearchComponent';
import {BeerDetailsComponent} from './BeerDetailsComponent';
import {ConsumedComponent} from './ConsumedComponent';

@Component({
  selector: "app",
  styles: ['.api-data {color: blue}'],
  template: `
    <h1>WatchYourBAC</h1>
    <nav>
        <a [routerLink]="['Info']">Home</a>
        <a [routerLink]="['BeerSearch']">Search</a>
        <a [routerLink]="['Consumed']">Beer Consumed</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/', name: 'Info', component: HomeComponent},
  {path:'/search', name: 'BeerSearch', component: SearchComponent},
  {path:'/beer/:id', name: 'BeerDetails', component: BeerDetailsComponent},
  {path:'/consumed', name: 'Consumed', component: ConsumedComponent}
])
export class AppComponent {
  constructor(){}
}
