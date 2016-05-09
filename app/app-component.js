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
var houses_component_1 = require('./house/houses.component');
var house_details_component_1 = require('./house/house-details/house-details.component');
var login_component_1 = require('./login/login.component');
var router_1 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent = __decorate([
        router_1.Routes([
            { path: '/', component: houses_component_1.HousesComponent },
            { path: '/login', component: login_component_1.LoginComponent },
            { path: '/:address', component: house_details_component_1.HouseDetailsComponent }
        ]),
        core_1.Component({
            selector: 'my-app',
            template: "\n      <div class=\"float-right\"><a [routerLink]=\"['/login']\">Login</a></div>\n      <router-outlet></router-outlet>\n  ",
            directives: [houses_component_1.HousesComponent, login_component_1.LoginComponent, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app-component.js.map