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
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var firebase_service_1 = require('../services/firebase.service');
var LoginService = (function (_super) {
    __extends(LoginService, _super);
    function LoginService() {
        _super.call(this);
        this.hasAuth$ = new BehaviorSubject_1.BehaviorSubject(false);
    }
    LoginService.prototype.login = function (email, password) {
        var _this = this;
        this.firebase.authWithPassword({ email: email, password: password }, function (error, authData) {
            _this.hasAuth$.next(Boolean(!error));
        });
    };
    LoginService.prototype.logout = function () {
        this.firebase.unauth();
        this.hasAuth$.next(false);
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LoginService);
    return LoginService;
}(firebase_service_1.FirebaseService));
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map