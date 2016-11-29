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
var MenusService = (function () {
    function MenusService() {
        this.data = [
            {
                "thumb": "assets/images/vegextra.png",
                "title": "Veg Extravaganza"
            },
            {
                "thumb": "assets/images/Cloud9.jpg",
                "title": "Cloud 9"
            },
            {
                "thumb": "assets/images/ChefsVegWonderMain9.jpg",
                "title": "Chef's Veg Wonder"
            },
            {
                "thumb": "assets/images/peppypaneer.png",
                "title": "Peppy Paneer"
            }
        ];
    }
    MenusService.prototype.getMenusData = function () {
        return this.data;
    };
    MenusService.prototype.getSelectedMenu = function () {
        return this.selectedMenu;
    };
    MenusService.prototype.setSelectedMenu = function (val) {
        this.selectedMenu = val;
    };
    MenusService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MenusService);
    return MenusService;
}());
exports.MenusService = MenusService;
//# sourceMappingURL=menus.service.js.map