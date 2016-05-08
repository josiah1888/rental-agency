import {Observable} from 'rxjs/Observable';
import {Component} from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'login',
  template: `
    <div class="text-center">
        <div [hidden]="hasAuth$ | async">
            Email: <input type="email" [(ngModel)]="email" />
            Password: <input type="password" [(ngModel)]="password" />
            <button class="btn" (click)="login()" >Login</button>
        </div>
        <div [hidden]="!(hasAuth$ | async)">
            <button class="btn" (click)="logout()">Logout</button>
        </div>
    </div>  
  `
})
export class LoginComponent {
  hasAuth$: Observable<boolean>;
  email: string;
  password: string;
  constructor(private dataService: DataService) {
      this.hasAuth$ = dataService.hasAuth$;
  }
  
  login() {
      this.dataService.login(this.email, this.password);
      this.email = this.password = '';
  }
  
  logout() {
      this.dataService.logout();
  }
}
