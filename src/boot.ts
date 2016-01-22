import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './AppComponent';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {BacService} from './BacService';

// registering service here makes it available as a singleton for the entire application
bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, BacService]);