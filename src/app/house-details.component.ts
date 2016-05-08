import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
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
  houseSubscription: Subscription;
  pipe = new HouseAddressUrlPipe();
  
  constructor(private dataService: DataService) {
    let path = window.location.pathname;
    let address = path.substr(path.lastIndexOf('/') + 1);
    
    this.house$ = dataService.houses$.map(i => i.find(j => this.pipe.transform(j.address) === address));
    this.hasAuth$ = dataService.hasAuth$;
  }
  
  ngAfterViewInit() {
    setTimeout(() => {
    this.house$.subscribe(i => {
      if (i && document.getElementById(i.id)) {
        this.setupShareButton(i);
      }
    });
    }, 500);
  }
  
  setupShareButton(house: House) {
    // let ogTags = [
    //   {property: 'og:url', content: window.location.href.replace('localhost:8080', '0ce0a49c.ngrok.io')},
    //   {property: 'og:type', content: 'website'},
    //   {property: 'og:title', content: 'JBurchard Rental Agency (demo)'},
    //   {property: 'og:description', content: 'Demo rental agency using Angular2 + Typescript + Firebase'},
    //   {property: 'og:image', content: house.imageUrl},
    //   ];
      
    // ogTags.forEach(i => {
    //   let m: Element = document.createElement('meta');
    //   m.setAttribute('property', i.property);
    //   m.setAttribute('content', i.content);
    //   document.head.appendChild(m);
    // });
    
     (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
}
