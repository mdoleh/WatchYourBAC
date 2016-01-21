import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
  selector: "app",
  styles: ['h1 {color: orange}'],
  template: `
    <h1>Beer  Details</h1>
    <div>beer ID: {{beerId}}</div>
  `,
})
export class BeerDetailsComponent implements OnInit {
  private beerId : string;
    
  constructor(routeParams: RouteParams){
      this.beerId = routeParams.get("id")
  }
  ngOnInit() {
      // service call to get beer by id and use results in template
  }
}
