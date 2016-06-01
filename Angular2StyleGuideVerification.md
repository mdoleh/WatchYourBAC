# Angular2 Style Guide Verification
### Find the style guide [here](https://angular.io/docs/ts/latest/guide/style-guide.html)

## Sessions

1. [Intro - shell](http://plnkr.co/edit/cfcFBIf6KuNELspLOKZ7?p=preview)
2. [Home page](https://plnkr.co/edit/CkaUN4?p=preview)
3. [Search page](https://plnkr.co/edit/20ssm8OyGxC9JpHLIcjQ?p=preview)

## Verification

1. Single Responsibility Principle (SRP)
  1. Rule of One
    * The Home Component, search component, etc. have single responsibilities
    * All sessions follow this rule
  2. Small functions
    * From the Home Component: nextPage() and getRadioValue() are small (session 2)
2. Naming
  1. General naming guidelines
    * serializer.service.ts : serializer is the feature, service is the type (session 2)
  2. Separate file names with dots and dashes
    * bac.service.ts : dot separation (session 2)