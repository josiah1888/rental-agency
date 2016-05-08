import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/Observable/of';
import {House} from './house';
import {DataService} from './data.service';
import {HouseComponent} from './house.component';
import {EditableHouseComponent} from './editable-house.component';

@Component({
  selector: 'houses',
  directives: [HouseComponent, EditableHouseComponent],
  template: `
    <div *ngFor="let house of houses | async">
        <house [house]="house" (save)="saveHouse($event)" (delete)="deleteHouse($event)"></house>
    </div>
    
    <editable-house [house]="newHouse" *ngIf="newHouse" [hidden]="!newHouse" (save)="saveHouse($event)" (cancel)="cancel()"></editable-house>
    <div class="text-center">
        <button (click)="createNewHouse()" class="btn">Create New House</button>
    </div>
  `
})
export class HousesComponent {
  houses: Observable<House[]>;
  newHouse: House = null;
  constructor(private dataService: DataService) {
      this.houses = dataService.houses;
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
}
