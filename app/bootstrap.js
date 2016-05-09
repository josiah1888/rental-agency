"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require('@angular/router');
var app_component_1 = require('./app-component');
var firebase_service_1 = require('./services/firebase.service');
var login_service_1 = require('./login/login.service');
var facebook_service_1 = require('./services/facebook.service');
var house_service_1 = require('./house/services/house.service');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    firebase_service_1.FirebaseService,
    login_service_1.LoginService,
    facebook_service_1.FacebookService,
    house_service_1.HouseService,
    router_1.ROUTER_PROVIDERS
]);
//# sourceMappingURL=bootstrap.js.map