import {Component} from 'angular2/core';

@Component({
  selector: "app",
  styles: ['h1 {color: purple}'],
  template: `
    <h1>Fill out your info</h1>
  `,
  providers: []
})
export class HomeComponent {
  constructor(){}
}
