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
var photos_service_1 = require("../services/photos.service");
var PhotoListComponent = (function () {
    // ------------------------------- methods -------------------------------
    // constructor
    function PhotoListComponent(photosService) {
        this.photosService = photosService;
    }
    PhotoListComponent.prototype.ngOnInit = function () {
        this._photosArr = this.photosService.getPhotosHandler();
        console.log(this._photosArr);
    };
    PhotoListComponent = __decorate([
        core_1.Component({
            selector: 'photos-component',
            template: "\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t<h1 class=\"heading text-center\">Foto Tags</h1>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-4\">\n\t\t\t\t\t<div class=\"componentPhoto\">\n\t\t\t\t\t\t<div class=\"topWrapper\">\n\t\t\t\t\t\t\t<h4 class=\"title\">Work 1</h4>\n\t\t\t\t\t\t\t<ul class=\"tools\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\"><img class=\"img-responsive\" src=\"assets/images/icon-show.png\"></a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\"><img class=\"img-responsive\" src=\"assets/images/icon-add-comment.png\"></a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"imgWrapper\">\n\t\t\t\t\t\t\t<ul class=\"tagWrapper\">\n\t\t\t\t\t\t\t\t<li><img class=\"img-responsive\" src=\"assets/images/icon-comment.png\"></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"assets/images/home.png\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [photos_service_1.PhotosService])
    ], PhotoListComponent);
    return PhotoListComponent;
}());
exports.PhotoListComponent = PhotoListComponent;
//# sourceMappingURL=photo.list.component.js.map