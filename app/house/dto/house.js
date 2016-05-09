"use strict";
var House = (function () {
    function House(house) {
        if (house === void 0) { house = {}; }
        this.id = '';
        this.order = 0;
        this.rent = 525;
        this.isRented = false;
        this.numBedrooms = 1;
        this.numBathrooms = 1;
        this.location = 'Cape Girardeau';
        this.schoolDistrict = 'Franklin';
        this.parking = 'street';
        this.laundry = 'Washer/Dryer Hook-up';
        this.deposit = 525;
        this.petsAllowed = false;
        this.description = 'This is a really great find!';
        this.address = '123 Main St.';
        this.imageUrl = 'http://rentsemo.com/img/gallery/singlefamily/lrg_singlefamily_25.jpg';
        for (var _i = 0, _a = Object.keys(house); _i < _a.length; _i++) {
            var key = _a[_i];
            this[key] = house[key];
        }
    }
    return House;
}());
exports.House = House;
//# sourceMappingURL=house.js.map