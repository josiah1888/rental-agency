import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import {AppComponent} from './app-component';
import {DataService} from './data.service';

bootstrap(AppComponent, [DataService, ROUTER_PROVIDERS]);
