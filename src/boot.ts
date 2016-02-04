import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './AppComponent';
import {ROUTER_PROVIDERS} from 'angular2/router';

// registering service here makes it available as a singleton for the entire application
// not recommended by Angular team to do this however
// we'll be storing data needed later in sessionStorage in the browser instead
// alternatively it can be injected the root level component as well
// but we want the user data to persist on refresh
bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);