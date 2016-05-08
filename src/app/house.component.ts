import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/Observable/of';
import {House} from './house';
import {DataService} from './data.service';
import {EditableHouseComponent} from './editable-house.component';

@Component({
  selector: 'house',
  templateUrl: 'app/house.component.html',
  directives: [EditableHouseComponent]
})
export class HouseComponent {
  @Input() house: House;
  @Output() save: EventEmitter<House> = new EventEmitter();
  @Output() delete: EventEmitter<House> = new EventEmitter();
  hasAuth$: Observable<boolean>;
  constructor(dataService: DataService) {
    this.hasAuth$ = dataService.hasAuth$;
  }
}

