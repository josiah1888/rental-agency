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
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
exports.BASE_URL = 'https://glaring-torch-2375.firebaseio.com/';
var FirebaseService = (function () {
    function FirebaseService(baseUrl) {
        if (baseUrl === void 0) { baseUrl = exports.BASE_URL; }
        this.baseUrl = baseUrl;
        this._collection = [];
        this.firebase = new Firebase(this.baseUrl);
        this.collection$ = new BehaviorSubject_1.BehaviorSubject(this._collection);
        this.collection$.subscribe();
        this.firebaseInit();
    }
    FirebaseService.prototype.firebaseInit = function () {
        var _this = this;
        this.firebase.on('child_added', function (snapshot) {
            var item = Object.assign(snapshot.val(), { id: snapshot.key() });
            _this._collection.push(item);
            _this.collection$.next(_this._collection);
        });
        this.firebase.on('child_removed', function (snapshot) {
            _this._collection.splice(_this._collection.map(function (i) { return i.id; }).indexOf(snapshot.key()), 1);
            _this.collection$.next(_this._collection);
        });
        this.firebase.on('child_changed', function (snapshot) {
            _this._collection[(_this._collection.map(function (i) { return i.id; }).indexOf(snapshot.key()))] = snapshot.val();
            _this.collection$.next(_this._collection);
        });
    };
    FirebaseService.prototype.create = function (item) {
        if (item.id) {
            this.update(item);
        }
        else {
            this.firebase.push(item);
        }
    };
    FirebaseService.prototype.update = function (item) {
        var ref = new Firebase(this.baseUrl + "/" + item.id);
        ref.set(item);
    };
    FirebaseService.prototype.delete = function (item) {
        var ref = new Firebase(this.baseUrl + "/" + item.id);
        ref.set(null);
    };
    Object.defineProperty(FirebaseService.prototype, "collection", {
        get: function () {
            return Object.assign([], this._collection);
        },
        enumerable: true,
        configurable: true
    });
    FirebaseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [String])
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=firebase.service.js.map