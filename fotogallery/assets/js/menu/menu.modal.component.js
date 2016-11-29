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
var menus_service_1 = require("./menus.service");
var MenuModalComponent = (function () {
    function MenuModalComponent(menusService) {
        this.menusService = menusService;
        this.selectedMenu = {
            title: ""
        };
    }
    MenuModalComponent.prototype.ngOnInit = function () {
        this.selectedMenu = this.menusService.getSelectedMenu();
    };
    MenuModalComponent = __decorate([
        core_1.Component({
            selector: 'menu-modal-component',
            template: "\n\t\t<div class=\"modal fade\" id=\"menuModal\" tabindex=\"-1\" role=\"dialog\">\n\t\t\t<div class=\"modal-dialog\" role=\"document\">\n\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n\t\t\t\t\t\t<h4 class=\"modal-title\">{{selectedMenu.title}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-body\"></div>\n\t\t\t\t</div><!-- /.modal-content -->\n\t\t\t</div><!-- /.modal-dialog -->\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [menus_service_1.MenusService])
    ], MenuModalComponent);
    return MenuModalComponent;
}());
exports.MenuModalComponent = MenuModalComponent;
//# sourceMappingURL=menu.modal.component.js.map