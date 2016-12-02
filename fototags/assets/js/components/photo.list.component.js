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
        this._photosArr = [];
    }
    // life cycle
    PhotoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.photosService.getPhotosHandler().subscribe(function (res) {
            _this._photosArr = res;
            _this._photosArr.forEach(function (element, index) {
                element.isHide = false;
            });
        });
    };
    PhotoListComponent.prototype.ngAfterViewChecked = function () {
        jQuery(".draggable").each(function (index, element) {
            console.log(index, element);
            element.draggable({ containment: "#tagWrapper", scroll: false });
        });
    };
    // tag handlers
    PhotoListComponent.prototype.tagsVisibleHandler = function (event, photoObject) {
        photoObject.isHide = !photoObject.isHide;
        return false;
    };
    PhotoListComponent.prototype.addTagHandler = function (event, photoObject) {
        this.photosService.addTag(photoObject);
        return false;
    };
    PhotoListComponent.prototype.setTagPosition = function (x, y) {
        var styles = {
            'top': y,
            'left': x
        };
        return styles;
    };
    PhotoListComponent = __decorate([
        core_1.Component({
            selector: 'photos-component',
            template: "\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t<h1 class=\"heading text-center\">Foto Tags</h1>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6\" *ngFor=\"let photo of _photosArr;\">\n\t\t\t\t\t<div class=\"componentPhoto\">\n\t\t\t\t\t\t<div class=\"topWrapper\">\n\t\t\t\t\t\t\t<h4 class=\"title\">{{photo.title}}</h4>\n\t\t\t\t\t\t\t<ul class=\"tools\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" (click)=\"tagsVisibleHandler($event, photo)\" [style.opacity]=\"photo.isHide?0.2:1\"><img class=\"img-responsive\" src=\"assets/images/icon-show.png\"></a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" (click)=\"addTagHandler($event, photo)\"><img class=\"img-responsive\" src=\"assets/images/icon-add-comment.png\"></a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- Tags -->\n\t\t\t\t\t\t<div class=\"imgWrapper\" [style.background-image]=\"'url(' + photo.image + ')'\">\n\t\t\t\t\t\t\t<ul id=\"tagWrapper\" class=\"tagWrapper\" *ngIf=\"!photo.isHide\">\n\t\t\t\t\t\t\t\t<li *ngFor=\"let tag of photo.tags; let i = index;\" [ngStyle]=\"setTagPosition(tag.x, tag.y)\" class=\"draggable ui-widget-content\">\n\t\t\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"assets/images/icon-comment.png\">\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [photos_service_1.PhotosService])
    ], PhotoListComponent);
    return PhotoListComponent;
}());
exports.PhotoListComponent = PhotoListComponent;
//# sourceMappingURL=photo.list.component.js.map