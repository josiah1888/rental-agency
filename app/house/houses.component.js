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
var house_service_1 = require('./services/house.service');
var house_component_1 = require('./house/house.component');
var editable_house_component_1 = require('./editable-house/editable-house.component');
var login_service_1 = require('../login/login.service');
var facebook_service_1 = require('../services/facebook.service');
var HousesComponent = (function () {
    function HousesComponent(houseService, loginService, facebookService) {
        var _this = this;
        this.houseService = houseService;
        this.loginService = loginService;
        this.facebookService = facebookService;
        this.newHouse = null;
        this.houses$ = houseService.collection$.map(function (i) { return i.sort(_this.sortHouses); });
        this.hasAuth$ = loginService.hasAuth$;
    }
    HousesComponent.prototype.createNewHouse = function () {
        this.newHouse = new house_service_1.House();
    };
    HousesComponent.prototype.saveHouse = function (house) {
        this.houseService.create(house);
        this.newHouse = null;
    };
    HousesComponent.prototype.deleteHouse = function (house) {
        this.houseService.delete(house);
    };
    HousesComponent.prototype.cancel = function () {
        this.newHouse = null;
    };
    HousesComponent.prototype.sortHouses = function (a, b) {
        if (a.order < b.order) {
            return -1;
        }
        else if (a.order > b.order) {
            return 1;
        }
        else {
            return 0;
        }
    };
    HousesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.facebookService.initShareButtons(); }, 500);
    };
    HousesComponent = __decorate([
        core_1.Component({
            selector: 'houses',
            directives: [house_component_1.HouseComponent, editable_house_component_1.EditableHouseComponent],
            template: "\n    <div *ngFor=\"let house of houses$ | async\">\n        <house [house]=\"house\" (save)=\"saveHouse($event)\" (delete)=\"deleteHouse($event)\"></house>\n    </div>\n    \n    <editable-house [house]=\"newHouse\" *ngIf=\"newHouse\" [hidden]=\"!newHouse\" (save)=\"saveHouse($event)\" (cancel)=\"cancel()\"></editable-house>\n    <div class=\"text-center\" *ngIf=\"hasAuth$ | async\">\n        <button (click)=\"createNewHouse()\" class=\"btn\">Create New House</button>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [house_service_1.HouseService, login_service_1.LoginService, facebook_service_1.FacebookService])
    ], HousesComponent);
    return HousesComponent;
}());
exports.HousesComponent = HousesComponent;
//# sourceMappingURL=houses.component.js.map