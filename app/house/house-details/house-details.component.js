"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var house_service_1 = require('../services/house.service');
var house_component_1 = require('../house/house.component');
var editable_house_component_1 = require('../editable-house/editable-house.component');
var house_address_url_pipe_1 = require('../pipes/house-address-url.pipe');
var login_service_1 = require('../../login/login.service');
var facebook_service_1 = require('../../services/facebook.service');
var HouseDetailsComponent = (function () {
    function HouseDetailsComponent(houseService, loginService, facebookService) {
        var _this = this;
        this.houseService = houseService;
        this.loginService = loginService;
        this.facebookService = facebookService;
        this.save = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
        this.pipe = new house_address_url_pipe_1.HouseAddressUrlPipe();
        var path = window.location.pathname;
        var address = path.substr(path.lastIndexOf('/') + 1);
        this.house$ = houseService.collection$.map(function (i) { return i.find(function (j) { return _this.pipe.transform(j.address) === address; }); });
        this.hasAuth$ = loginService.hasAuth$;
    }
    HouseDetailsComponent.prototype.ngAfterViewInit = function () {
        this.facebookService.initShareButtons();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', house_service_1.House)
    ], HouseDetailsComponent.prototype, "house", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], HouseDetailsComponent.prototype, "save", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], HouseDetailsComponent.prototype, "delete", void 0);
    HouseDetailsComponent = __decorate([
        core_1.Component({
            selector: 'houses-details',
            directives: [house_component_1.HouseComponent, editable_house_component_1.EditableHouseComponent],
            template: "\n    <house *ngIf=\"house$ | async\" [house]=\"house$ | async\" (save)=\"saveHouse($event)\" (delete)=\"deleteHouse($event)\"></house>\n  "
        }), 
        __metadata('design:paramtypes', [house_service_1.HouseService, login_service_1.LoginService, facebook_service_1.FacebookService])
    ], HouseDetailsComponent);
    return HouseDetailsComponent;
}());
exports.HouseDetailsComponent = HouseDetailsComponent;
//# sourceMappingURL=house-details.component.js.map