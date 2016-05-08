import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {House} from './house';
import {DataService} from './data.service';
import {HouseComponent} from './house.component';
import {EditableHouseComponent} from './editable-house.component';
import {HouseAddressUrlPipe} from './house-address-url.pipe';

@Component({
  selector: 'houses-details',
  directives: [HouseComponent, EditableHouseComponent],
  template: `
    <house *ngIf="house$ | async" [house]="house$ | async" (save)="saveHouse($event)" (delete)="deleteHouse($event)"></house>
  `
})
export class HouseDetailsComponent {
  @Input() house: House;
  @Output() save: EventEmitter<House> = new EventEmitter();
  @Output() delete: EventEmitter<House> = new EventEmitter();
  hasAuth$: Observable<boolean>;
  house$: Observable<House>;
  
  constructor(private dataService: DataService) {
    let path = window.location.pathname;
    let address = path.substr(path.lastIndexOf('/') + 1);
    let pipe = new HouseAddressUrlPipe();
    
    this.house$ = dataService.houses$.map(i => i.find(j => pipe.transform(j.address) === address));
    this.hasAuth$ = dataService.hasAuth$;
  }
  
  changeOrder({house, direction}: {house: House, direction: number}) {
    this.dataService.changeOrder(house, direction);
  }
}
