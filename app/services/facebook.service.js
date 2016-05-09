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
var FacebookService = (function () {
    function FacebookService() {
    }
    /*
    Set the required href attribute on the share button
   */
    FacebookService.prototype.setShareButtonAttribute = function (elementId, href) {
        href = href.replace('localhost:8080', '02ce7d90.ngrok.io'); // temp
        var share = document.getElementById(elementId);
        share.setAttribute('data-href', href);
    };
    // ngAfterViewInit() {
    //   setTimeout(() => {
    //   this.house$.subscribe(i => {
    //     if (i && document.getElementById(i.id)) {
    //       this.setupShareButton(i);
    //     }
    //   });
    //   }, 500);
    // }
    /*
      Run the one-time script to initialize FB Share buttons
    */
    FacebookService.prototype.initShareButtons = function () {
        // let ogTags = [
        //   {property: 'og:url', content: window.location.href.replace('localhost:8080', '0ce0a49c.ngrok.io')},
        //   {property: 'og:type', content: 'website'},
        //   {property: 'og:title', content: 'JBurchard Rental Agency (demo)'},
        //   {property: 'og:description', content: 'Demo rental agency using Angular2 + Typescript + Firebase'},
        //   {property: 'og:image', content: house.imageUrl},
        //   ];
        // ogTags.forEach(i => {
        //   let m: Element = document.createElement('meta');
        //   m.setAttribute('property', i.property);
        //   m.setAttribute('content', i.content);
        //   document.head.appendChild(m);
        // });
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id))
                return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    };
    FacebookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FacebookService);
    return FacebookService;
}());
exports.FacebookService = FacebookService;
//# sourceMappingURL=facebook.service.js.map