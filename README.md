# Watch Your BAC

Simple web application to compute one's Blood Alcohol Content (BAC) built using Angular 2.0 and Unit tested with Jasmine 2.4.1.

## Run the app

Clone the repo, install it, start it.

```
npm install
npm start
```

## Sessions

1. [Hello World](http://plnkr.co/edit/jcDMNeNrgOhAxvo6QFGi?p=preview) and creating [The Shell](http://plnkr.co/edit/Te07jE3fttP7XgQAiAjx?p=preview)
1. [Home page](http://plnkr.co/edit/4a7GFPDubSZFBVKKgkZs?p=preview)
1. [Search page](http://plnkr.co/edit/3Ersc8BTwudRC9cnaLYs?p=preview)
  1. [**Where we left off**](http://plnkr.co/edit/3XHWiMkBnsjXwj4dCnQj) from last session, 8/31/16
1. [Beer Details page](https://plnkr.co/edit/NbIKgUr3DUYcEkdxMoJG?p=preview)
1. [Beers Consumed page](http://plnkr.co/edit/HuIhAfsRCDz7iF0C6HWd?p=preview)
1. [Unit Testing](http://plnkr.co/edit/kwbzi9FZyXro85fSBFxF?p=preview)

## Angular 2 style guide [here](https://angular.io/docs/ts/latest/guide/style-guide.html)

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
    * bac.service.ts contains the BacService (session 2)
    * serializer.service.ts contains the Serializer (session 2)
1. Coding Conventions
  1. Classes - camel cased
    * BacService is upper camel cased (from bac.service.ts, session 2)
  1. Constants - for use with constant data
    * See Constants.ts (session 3)
  1. Interfaces - camel cased without 'I' prefix
    * See api-return-types.ts (session 3)
  1. Methods - lower camel cased, don't prefix private methods with underscore
    * BacService - getState() and restoreUserData() (session 2)
1. Application Structure
  * Remember **LIFT**
    * **L**ocate code quickly
      * store files in intuitive locations
      * related files are near each other
    * **I**dentify code at a glance
      * files contain exactly one thing per file
    * **F**lattest possible structure
      * not too much nesting unless there are many files in a folder
      * all of our files live in app/, views/, or styles/
    * **T**ry to be DRY
      * quantity-component.ts is reusable code used in both the BeerDetailsComponent and ConsumedComponent (session 5)
1. Components
  1. Selectors should use kebab-case
    * SearchButtonsComponent has the 'search-buttons' selector (session 3)
  1. Extract templates and styles into their own files when more than 3 lines
    * SearchComponent has a search.html and search.css (session 3)
  1. Use @Input and @Output decorators instead of input and output properties
    * SearchButtonsComponent - nextPage, previousPage, shouldDisableNext, shouldDisablePrevious (session 3)
  1. Put logic in in services
    * Serializer service (session 2)
  1. Don't prefix events with "on" (event handlers are okay for doing that)
    * nextPage and previousPage events in SearchButtonsComponent (session 3)
  1. Presentation logic belongs in component class, not the template
    * your blood alcohol content is computed behind the scenes in the ConsumedComponent (session 5)
1. Services
  1. Use services as singletons within same injector
    * Serializer service (session 2)
  1. Services should follow SRP
    * Serializer has one responsibility: maintain sessionStorage data (session 2)
  1. Use @Injectable decorator for Angular DI system
    * Serializer service (session 2)
