import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import {AppComponent} from './app-component';
import {FirebaseService} from './services/firebase.service';
import {LoginService} from './login/login.service';
import {FacebookService} from './services/facebook.service';
import {HouseService} from './house/services/house.service';

bootstrap(AppComponent, [
    FirebaseService,
    LoginService,
    FacebookService,
    HouseService, 
    ROUTER_PROVIDERS
]);
