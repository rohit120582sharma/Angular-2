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
// Other Modules
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var angular2_infinite_scroll_1 = require('angular2-infinite-scroll');
// Components/Views
var menus_component_1 = require("./components/menus/menus.component");
var menus_search_component_1 = require("./components/menus/menus.search.component");
var menus_list_component_1 = require("./components/menus/menus.list.component");
var menus_customize_modal_component_1 = require("./components/menus/menus.customize.modal.component");
// Services
var menus_service_1 = require("./services/menus.service");
// Pipe/Filer
var menus_search_pipe_1 = require("./pipes/menus.search.pipe");
// ------------------ Decorator and Class ------------------
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                angular2_infinite_scroll_1.InfiniteScrollModule
            ],
            providers: [
                menus_service_1.MenusService
            ],
            declarations: [
                menus_component_1.MenusComponent,
                menus_search_component_1.MenusSearchComponent,
                menus_list_component_1.MenusListComponent,
                menus_customize_modal_component_1.MenusCustomizeModalComponent,
                menus_search_pipe_1.MenusSearchPipe
            ],
            bootstrap: [
                menus_component_1.MenusComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map