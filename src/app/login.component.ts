import {Observable} from 'rxjs/Observable';
import {Component} from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'login',
  template: `
    <div class="margin--small  text-center">
        <form [hidden]="hasAuth$ | async" (ngSubmit)="login()" class="margin--small" #loginForm="ngForm">
            <div>Email: <input type="email" [(ngModel)]="email" required/></div>
            <div>Password: <input type="password" [(ngModel)]="password" required/></div>
            <div><button class="btn" (click)="login()" type="submit" [disabled]="!loginForm.form.valid">Login</button></div>
        </form>
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
      this.hasAuth$.subscribe(() => this.email = this.password = '');
  }
  
  login() {
      this.dataService.login(this.email, this.password);
  }
  
  logout() {
      this.dataService.logout();
  }
}
