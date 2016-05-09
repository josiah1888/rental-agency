"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var firebase_service_1 = require('../../services/firebase.service');
var house_1 = require('../dto/house');
exports.House = house_1.House;
var HouseService = (function (_super) {
    __extends(HouseService, _super);
    function HouseService() {
        _super.call(this, firebase_service_1.BASE_URL + 'houses/');
    }
    HouseService.prototype.create = function (house) {
        if (!house.id) {
            house.order = this.collection.length;
        }
        _super.prototype.create.call(this, house);
    };
    HouseService.prototype.delete = function (house) {
        var _this = this;
        _super.prototype.delete.call(this, house);
        this.collection
            .filter(function (i) { return i.order > house.order; })
            .forEach(function (i) {
            i.order--;
            _this.update(i);
        });
    };
    HouseService.prototype.changeOrder = function (house, direction) {
        var _this = this;
        var housesToSwap = this.collection
            .filter(function (i) { return i.order === house.order + direction; });
        housesToSwap
            .forEach(function (i) {
            i.order -= direction;
            _this.update(i);
        });
        if (housesToSwap.length) {
            house.order += direction;
            this.update(house);
        }
    };
    HouseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HouseService);
    return HouseService;
}(firebase_service_1.FirebaseService));
exports.HouseService = HouseService;
//# sourceMappingURL=house.service.js.map