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
var MenusSearchComponent = (function () {
    // -------------------- Methods --------------------
    // constructor
    function MenusSearchComponent(menusService) {
        this.menusService = menusService;
        // -------------------- Input/Output --------------------
        this.searchInput = new core_1.EventEmitter();
    }
    // search handler
    MenusSearchComponent.prototype.searchHandler = function () {
        this.searchInput.emit(this.search);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MenusSearchComponent.prototype, "searchInput", void 0);
    MenusSearchComponent = __decorate([
        core_1.Component({
            selector: 'search-component',
            template: "\n\t\t<div class=\"container mb30\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"search\" name=\"search\" placeholder=\"Search\" [(ngModel)]=\"search\" (ngModelChange)=\"searchHandler()\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [menus_service_1.MenusService])
    ], MenusSearchComponent);
    return MenusSearchComponent;
}());
exports.MenusSearchComponent = MenusSearchComponent;
//# sourceMappingURL=menus.search.component.js.map