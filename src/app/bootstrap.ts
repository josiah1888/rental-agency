import {bootstrap} from '@angular/platform-browser-dynamic';
import {UserService} from './user-service';
import {AppComponent} from './app-component';
import {LoginService} from './login-service';
import {DataService} from './data.service';

bootstrap(AppComponent, [LoginService, UserService, DataService]);
