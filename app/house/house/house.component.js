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
var house_service_1 = require('../services/house.service');
var editable_house_component_1 = require('../editable-house/editable-house.component');
var house_address_url_pipe_1 = require('../pipes/house-address-url.pipe');
var login_service_1 = require('../../login/login.service');
var facebook_service_1 = require('../../services/facebook.service');
var HouseComponent = (function () {
    function HouseComponent(houseService, loginService, facebookService) {
        this.houseService = houseService;
        this.loginService = loginService;
        this.facebookService = facebookService;
        this.save = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
        this.pipe = new house_address_url_pipe_1.HouseAddressUrlPipe();
        this.hasAuth$ = loginService.hasAuth$;
    }
    HouseComponent.prototype.ngOnInit = function () {
        this.editableHouse = Object.assign({}, this.house);
    };
    HouseComponent.prototype.changeOrder = function (_a) {
        var house = _a.house, direction = _a.direction;
        this.houseService.changeOrder(house, direction);
    };
    HouseComponent.prototype.ngAfterViewInit = function () {
        this.initFacebookShare();
    };
    HouseComponent.prototype.initFacebookShare = function () {
        var url = window.location.href;
        var addressUrl = this.pipe.transform(this.house.address);
        if (!url.includes(addressUrl)) {
            url += addressUrl;
        }
        this.facebookService.setShareButtonAttribute(this.house.id, url);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', house_service_1.House)
    ], HouseComponent.prototype, "house", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], HouseComponent.prototype, "save", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], HouseComponent.prototype, "delete", void 0);
    HouseComponent = __decorate([
        core_1.Component({
            selector: 'house',
            templateUrl: 'app/house/house/house.component.html',
            directives: [editable_house_component_1.EditableHouseComponent]
        }), 
        __metadata('design:paramtypes', [house_service_1.HouseService, login_service_1.LoginService, facebook_service_1.FacebookService])
    ], HouseComponent);
    return HouseComponent;
}());
exports.HouseComponent = HouseComponent;
//# sourceMappingURL=house.component.js.map