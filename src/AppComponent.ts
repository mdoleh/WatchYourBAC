import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './HomeComponent';
import {SearchComponent} from './SearchComponent';
import {BeerDetailsComponent} from './BeerDetailsComponent';
import {ConsumedComponent} from './ConsumedComponent';

@Component({
  selector: "app",
  styles: ['.api-data {color: blue}'],
  templateUrl: '../views/App.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/', name: 'Info', component: HomeComponent},
  {path:'/search', name: 'BeerSearch', component: SearchComponent},
  {path:'/search/:id', name: 'BeerSearchId', component: SearchComponent},
  {path:'/beer/:id', name: 'BeerDetails', component: BeerDetailsComponent},
  {path:'/consumed', name: 'Consumed', component: ConsumedComponent}
])
export class AppComponent {
  constructor(){}
}
