import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {House} from './house';
import {DataService} from './data.service';
import {HouseComponent} from './house.component';
import {EditableHouseComponent} from './editable-house.component';

@Component({
  selector: 'houses',
  directives: [HouseComponent, EditableHouseComponent],
  template: `
    <div *ngFor="let house of houses$ | async">
        <house [house]="house" (save)="saveHouse($event)" (delete)="deleteHouse($event)"></house>
    </div>
    
    <editable-house [house]="newHouse" *ngIf="newHouse" [hidden]="!newHouse" (save)="saveHouse($event)" (cancel)="cancel()"></editable-house>
    <div class="text-center" *ngIf="hasAuth$ | async">
        <button (click)="createNewHouse()" class="btn">Create New House</button>
    </div>
  `
})
export class HousesComponent {
  hasAuth$: Observable<boolean>;
  houses$: Observable<House[]>;
  newHouse: House = null;
  constructor(private dataService: DataService) {
      this.houses$ = dataService.houses$.map(i => i.sort(this.sortHouses));
      this.hasAuth$ = dataService.hasAuth$;
  }
  
  createNewHouse() {
      this.newHouse = new House();
  }
  
  saveHouse(house: House) {
      this.dataService.create(house);
      this.newHouse = null;
  }
  
  deleteHouse(house: House) {
      this.dataService.delete(house);
  }
  
  cancel() {
      this.newHouse = null;
  }
  
  sortHouses(a: House, b: House): number {
    if (a.order < b.order) {
        return -1;
    } else if (a.order > b.order) {
        return 1;
    } else {
        return 0;
    }
  }
}
