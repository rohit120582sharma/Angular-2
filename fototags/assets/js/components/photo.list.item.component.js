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
var PhotoListItemComponent = (function () {
    // ------------------------------- Methods -------------------------------
    // constructor
    function PhotoListItemComponent(photosService) {
        this.photosService = photosService;
        // ------------------------------- Variables -------------------------------
        this._isHide = false;
        this._disabled = true;
    }
    // background click handler
    PhotoListItemComponent.prototype.bgClickHandler = function (event) {
        if (event === void 0) { event = null; }
        this._disabled = true;
        this._selectedTag = null;
        return false;
    };
    // tag handlers
    PhotoListItemComponent.prototype.tagInitHandler = function (tagObj, li) {
        var draggable = jQuery(li);
        var tagWrapper = draggable.closest(".tagWrapper");
        draggable.draggable({
            containment: tagWrapper,
            scroll: false,
            stop: function () {
                var width = tagWrapper.width();
                var height = tagWrapper.height();
                var leftPos = jQuery(this).position().left;
                var topPos = jQuery(this).position().top;
                var leftPer = String(leftPos / width * 100) + "%";
                var topPer = String(topPos / height * 100) + "%";
                tagObj.x = leftPer;
                tagObj.y = topPer;
                draggable.css({ 'left': tagObj.x, 'top': tagObj.y });
                //console.log(tagObj);
            }
        });
    };
    PhotoListItemComponent.prototype.setTagPosition = function (x, y) {
        var styles = {
            'top': y,
            'left': x
        };
        return styles;
    };
    PhotoListItemComponent.prototype.tagsVisibleHandler = function (event) {
        this._isHide = !this._isHide;
        this.bgClickHandler();
        return false;
    };
    PhotoListItemComponent.prototype.addTagHandler = function (event) {
        this.photosService.addTag(this.photo);
        this.bgClickHandler();
        return false;
    };
    PhotoListItemComponent.prototype.removeTagHandler = function (event) {
        this.photosService.removeTag(this.photo, this._selectedTagIndex);
        this.bgClickHandler();
        return false;
    };
    PhotoListItemComponent.prototype.editTagHandler = function (event, inputElem) {
        event.stopPropagation();
        this._disabled = !this._disabled;
        setTimeout(function () {
            inputElem.focus();
        }, 100);
        return false;
    };
    PhotoListItemComponent.prototype.tagClickHandler = function (event, tag, index) {
        event.stopPropagation();
        this._selectedTag = tag;
        this._selectedTagIndex = index;
        return false;
    };
    __decorate([
        core_1.Input('photo'), 
        __metadata('design:type', Object)
    ], PhotoListItemComponent.prototype, "photo", void 0);
    PhotoListItemComponent = __decorate([
        core_1.Component({
            selector: 'photo-list-item-component',
            template: "\n\t\t<div class=\"componentPhoto\">\n\t\t\t<!-- Top Wrapper -->\n\t\t\t<div class=\"topWrapper\">\n\t\t\t\t<h4 class=\"title\">{{photo.title}}</h4>\n\t\t\t\t<ul class=\"tools\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\" (click)=\"tagsVisibleHandler($event)\" [style.opacity]=\"_isHide?0.2:1\"><img class=\"img-responsive\" src=\"assets/images/icon-show.png\"></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\" (click)=\"addTagHandler($event)\"><img class=\"img-responsive\" src=\"assets/images/icon-add-comment.png\"></a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t<!-- Tags -->\n\t\t\t<div class=\"imgWrapper\" [style.background-image]=\"'url(' + photo.image + ')'\">\n\t\t\t\t<ul class=\"tagWrapper\" *ngIf=\"!_isHide\" (click)=\"bgClickHandler($event)\">\n\t\t\t\t\t<li class=\"draggable ui-widget-content\" #liElem *ngFor=\"let tag of photo.tags; let i = index;\" [ngStyle]=\"setTagPosition(tag.x, tag.y)\" [ngInit]=\"tagInitHandler(tag, liElem)\" (click)=\"tagClickHandler($event, tag, i)\">\n\t\t\t\t\t\t<img class=\"img-responsive\" src=\"assets/images/icon-comment.png\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t<!-- Message Wrapper -->\n\t\t\t<div class=\"messageWrapper\" *ngIf=\"_selectedTag\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a href=\"#\" (click)=\"editTagHandler($event, message)\"><img class=\"img-responsive\" src=\"assets/images/icon-pencil.png\"></a></li>\n\t\t\t\t\t<li><a href=\"#\" (click)=\"removeTagHandler($event)\"><img class=\"img-responsive\" src=\"assets/images/icon-delete.png\"></a></li>\n\t\t\t\t</ul>\n\t\t\t\t<input #message class=\"message\" type=\"text\" name=\"message\" [(ngModel)]=\"_selectedTag.message\" [disabled]=\"_disabled\">\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [photos_service_1.PhotosService])
    ], PhotoListItemComponent);
    return PhotoListItemComponent;
}());
exports.PhotoListItemComponent = PhotoListItemComponent;
//# sourceMappingURL=photo.list.item.component.js.map