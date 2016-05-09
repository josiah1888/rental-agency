import {Injectable} from "@angular/core";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {FirebaseService} from '../services/firebase.service'

@Injectable()
export class LoginService extends FirebaseService<any> {
    public hasAuth$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    
    constructor() {
        super();
    }
    
   login(email: string, password: string) {
    this.firebase.authWithPassword({email: email, password: password}, (error, authData) => {
      this.hasAuth$.next(Boolean(!error));
    });
   }
   
   logout() {
    this.firebase.unauth();
    this.hasAuth$.next(false);
   }
}
  