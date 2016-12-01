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
var menus_service_1 = require("../../services/menus.service");
var MenusListComponent = (function () {
    // -------------------- Methods --------------------
    // constructor
    function MenusListComponent(menusService) {
        this.menusService = menusService;
        this.totalLength = 0;
        this.totalVisible = 0;
        this.visibleOffset = 9;
    }
    // component life cycle
    MenusListComponent.prototype.ngOnInit = function () {
        this.menusData = this.menusService.getMenus();
        this.totalLength = this.menusData.length;
        this.totalVisible = 0;
        this.onScrollDown();
    };
    // edit handler
    MenusListComponent.prototype.editHandler = function (val) {
        this.menusService.setSelectedMenu(val);
    };
    MenusListComponent.prototype.onScrollDown = function () {
        this.totalVisible += this.visibleOffset;
        if (this.totalVisible >= this.totalLength) {
            this.totalVisible = this.totalLength;
        }
        this.menusLazyData = this.menusData.slice(0, this.totalVisible);
        console.log('scrolled down!! = ', this.totalVisible);
    };
    MenusListComponent.prototype.confirmPresence = function (i) {
        return (i < this.totalVisible);
    };
    __decorate([
        core_1.Input('search'), 
        __metadata('design:type', String)
    ], MenusListComponent.prototype, "search", void 0);
    MenusListComponent = __decorate([
        core_1.Component({
            selector: 'menus-list-component',
            template: "\n\t\t<div class=\"container\"\n\t\t\tinfinite-scroll [infiniteScrollDistance]=\"0.5\"\n\t\t\t[infiniteScrollThrottle]=\"500\"\n\t\t\t(scrolled)=\"onScrollDown()\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let menu of (menusLazyData | searchFilter:search); let i = index\">\n\t\t\t\t\t<div class=\"comp-menu-item mb30\">\n\t\t\t\t\t\t<h4 class=\"text-center\">{{menu.title}}</h4>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<img [src]=\"menu.thumb\" class=\"img-responsive img-thumb\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a href=\"#\" class=\"btn btnBlue\" (click)=\"editHandler(menu)\" data-toggle=\"modal\" data-target=\"#menusModal\">Edit</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [menus_service_1.MenusService])
    ], MenusListComponent);
    return MenusListComponent;
}());
exports.MenusListComponent = MenusListComponent;
//# sourceMappingURL=menus.list.component.js.map