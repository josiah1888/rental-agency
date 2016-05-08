import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app-component';
import {DataService} from './data.service';

bootstrap(AppComponent, [DataService]);
