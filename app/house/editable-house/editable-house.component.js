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
require('rxjs/add/Observable/of');
var house_service_1 = require('../services/house.service');
var EditableHouseComponent = (function () {
    function EditableHouseComponent() {
        this.save = new core_1.EventEmitter();
        this.cancel = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
        this.changeOrder = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', house_service_1.House)
    ], EditableHouseComponent.prototype, "house", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], EditableHouseComponent.prototype, "save", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], EditableHouseComponent.prototype, "cancel", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], EditableHouseComponent.prototype, "delete", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], EditableHouseComponent.prototype, "changeOrder", void 0);
    EditableHouseComponent = __decorate([
        core_1.Component({
            selector: 'editable-house',
            templateUrl: 'app/house/editable-house/editable-house.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], EditableHouseComponent);
    return EditableHouseComponent;
}());
exports.EditableHouseComponent = EditableHouseComponent;
//# sourceMappingURL=editable-house.component.js.map