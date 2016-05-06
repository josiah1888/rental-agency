import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/Observable/of';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {House} from './house';

declare let Firebase: any;

@Injectable()
export class DataService {
  public houses: BehaviorSubject<House[]>;
  private _houses: House[] = [];
  firebase: any = new Firebase('https://glaring-torch-2375.firebaseio.com/');
  constructor() {
    this.houses = new BehaviorSubject(this._houses);
    this.houses.subscribe();

    this.firebase.on('child_added', snapshot => {
      let house = snapshot.val();
      if (house) {
        this._houses.push(house)
        this.houses.next(this._houses);
      }
    });
  }

  save(house: House) {
    this.firebase.push(house);
  }
}
