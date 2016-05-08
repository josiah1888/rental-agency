import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/Observable/of';
import {House} from './house';
import {DataService} from './data.service';
import {EditableHouseComponent} from './editable-house.component';
import {HouseAddressUrlPipe} from './house-address-url.pipe';

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
  pipe: HouseAddressUrlPipe = new HouseAddressUrlPipe();
  
  constructor(private dataService: DataService) {
    this.hasAuth$ = dataService.hasAuth$;
  }
  
  changeOrder({house, direction}: {house: House, direction: number}) {
    this.dataService.changeOrder(house, direction);
  }
  
  ngAfterViewInit() {
    this.setupShareButton();
  }
  
  setupShareButton() {
    let share: Element = document.getElementById(this.house.id);
    let url = window.location.href.replace('localhost:8080', '0ce0a49c.ngrok.io');
    let addressUrl = this.pipe.transform(this.house.address);
    if (!url.includes(addressUrl)) {
      url += addressUrl;
    }
    
    share.setAttribute('data-href', url);
  }
}

