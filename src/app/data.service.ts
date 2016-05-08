import {Injectable} from "@angular/core";

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {House} from './house';

declare let Firebase: any;

@Injectable()
export class DataService {
  
  public houses$: BehaviorSubject<House[]>;
  private _houses: House[] = [];
  
  public hasAuth$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  
  private baseUrl: string = 'https://glaring-torch-2375.firebaseio.com/';
  private firebase: any = new Firebase(this.baseUrl);
  
  constructor() {
    this.houses$ = new BehaviorSubject(this._houses);
    this.houses$.subscribe();
    
    this.firebaseInit();
  }
  
  private firebaseInit() {
    this.firebase.on('child_added', snapshot => {
      let house = Object.assign(snapshot.val(), {id: snapshot.key()});
        this._houses.push(house)
        this.houses$.next(this._houses);
    });
    
    this.firebase.on('child_removed', snapshot => {
      this._houses.splice(this._houses.map(i => i.id).indexOf(snapshot.key()), 1);
      this.houses$.next(this._houses);      
    }); 
    
    this.firebase.on('child_changed', snapshot => {
      this._houses[(this._houses.map(i => i.id).indexOf(snapshot.key()))] = snapshot.val();
      this.houses$.next(this._houses);      
    }); 
  }

  create(house: House) {
    if (house.id) {
      this.update(house);
    } else {
      house.order = this._houses.length;
      this.firebase.push(house);
    }
  }
  
  update(house: House) {
    let ref = new Firebase(`${this.baseUrl}/${house.id}`);
    ref.set(house);
  }
  
  delete(house: House) {
    let ref = new Firebase(`${this.baseUrl}/${house.id}`);
    ref.set(null);
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
  
  changeOrder(house: House, direction: number) {
    let housesToSwap = this._houses
      .filter(i => i.order === house.order + direction);
      
    housesToSwap
      .forEach(i => {
        let copy = Object.assign({}, i);
        copy.order -= direction;
        this.update(copy);
      });
    
    if (housesToSwap.length) {
      house.order += direction;
      this.update(house);
    }
  }
}
