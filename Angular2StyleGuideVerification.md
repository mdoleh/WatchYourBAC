# Angular2 Style Guide Verification
### Find the style guide [here](https://angular.io/docs/ts/latest/guide/style-guide.html)

## Sessions

1. [Intro - shell](http://plnkr.co/edit/PNagJuu0kuSdtQVVILPP?p=preview)
1. [Home page](http://plnkr.co/edit/DDjowr23cqbiygwuttn9?p=preview)
1. [Search page](http://plnkr.co/edit/zRd8hCYzothzrzwWYlC6?p=preview)
1. [Beer Details page](https://plnkr.co/edit/Ue1Y4OZBjdE1vfASA0OB?p=preview)
1. [Beers Consumed page](http://plnkr.co/edit/Chb9YAUSIZ4nOZogRM2r?p=preview)
1. [Unit Testing](http://plnkr.co/edit/VKnB6Rwg8rNHjbqoc0HH?p=preview)

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