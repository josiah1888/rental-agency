import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/Observable/of';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {House} from './house';

declare let Firebase: any;

@Injectable()
export class DataService {
  private baseUrl: string = 'https://glaring-torch-2375.firebaseio.com/';
  
  public houses: BehaviorSubject<House[]>;
  private _houses: House[] = [];
  firebase: any = new Firebase(this.baseUrl);
  constructor() {
    this.houses = new BehaviorSubject(this._houses);
    this.houses.subscribe();

    this.firebase.on('child_added', snapshot => {
      let house = Object.assign(snapshot.val(), {id: snapshot.key()});
        this._houses.push(house)
        this.houses.next(this._houses);
    });
    
    this.firebase.on('child_removed', snapshot => {
      this._houses.splice(this._houses.map(i => i.id).indexOf(snapshot.key()), 1);
      this.houses.next(this._houses);      
    }); 
    
    this.firebase.on('child_changed', snapshot => {
      this._houses[(this._houses.map(i => i.id).indexOf(snapshot.key()))] = snapshot.val();
      this.houses.next(this._houses);      
    });    
  }

  create(house: House) {
    if (house.id) {
      this.update(house);
    } else {
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
}
