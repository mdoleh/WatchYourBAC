# Angular2 Style Guide Verification
### Find the style guide [here](https://angular.io/docs/ts/latest/guide/style-guide.html)

## Sessions

1. [Intro - shell](http://plnkr.co/edit/PNagJuu0kuSdtQVVILPP?p=preview)
1. [Home page](https://plnkr.co/edit/CkaUN4?p=preview) - [upgraded to RC4](http://plnkr.co/edit/DDjowr23cqbiygwuttn9?p=preview)
1. [Search page](https://plnkr.co/edit/20ssm8OyGxC9JpHLIcjQ?p=preview) - [upgraded to RC4](http://plnkr.co/edit/zRd8hCYzothzrzwWYlC6?p=preview)
1. [Beer Details page](http://plnkr.co/edit/ETPUC6FXi0m1LdQP0rln?p=preview) - [upgraded to RC4](https://plnkr.co/edit/Ue1Y4OZBjdE1vfASA0OB?p=info)
1. [Beers Consumed page](http://plnkr.co/edit/iCzPdA7PQEgS0bRhYgP3?p=preview)

## Verification

1. Single Responsibility Principle (SRP)
  1. Rule of One
    * The Home Component, search component, etc. have single responsibilities
    * All sessions follow this rule
  1. Small functions
    * From the Home Component: nextPage() and getRadioValue() are small (session 2)
1. Naming
  1. General naming guidelines
    * serializer.service.ts : serializer is the feature, service is the type (session 2)
  1. Separate file names with dots and dashes
    * bac.service.ts : dot separation (session 2)
  1. Components and Directives - consistent name, symbol suffix
    * beer-details.component.ts contains the **BeerDetails**Component class (session 2)
  1. Service names - suffix with *Service* when it's not clear what it is
    * hmmm
