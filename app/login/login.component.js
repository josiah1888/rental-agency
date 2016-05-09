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
var router_1 = require('@angular/router');
var login_service_1 = require('./login.service');
var LoginComponent = (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.hasAuth$ = loginService.hasAuth$;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hasAuthSub = this.hasAuth$.subscribe(function (hasAuth) {
            _this.email = _this.password = '';
            if (hasAuth) {
                _this.router.navigate(['/']);
            }
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.hasAuthSub.unsubscribe();
    };
    LoginComponent.prototype.login = function () {
        this.loginService.login(this.email, this.password);
    };
    LoginComponent.prototype.logout = function () {
        this.loginService.logout();
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: "\n    <div class=\"margin--small  text-center\">\n        <form [hidden]=\"hasAuth$ | async\" (ngSubmit)=\"login()\" class=\"margin--small\" #loginForm=\"ngForm\">\n            <div>Email: <input type=\"email\" [(ngModel)]=\"email\" required/></div>\n            <div>Password: <input type=\"password\" [(ngModel)]=\"password\" required/></div>\n            <div><button class=\"btn\" (click)=\"login()\" type=\"submit\" [disabled]=\"!loginForm.form.valid\">Login</button></div>\n        </form>\n        <div [hidden]=\"!(hasAuth$ | async)\">\n            <button class=\"btn\" (click)=\"logout()\">Logout</button>\n        </div>\n    </div>  \n  "
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map