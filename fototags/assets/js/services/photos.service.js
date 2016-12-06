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
var http_1 = require("@angular/http");
var Observable_1 = require('rxjs/Observable');
// adds ALL RxJS statics & operators to Observable
require('rxjs/Rx');
var PhotosService = (function () {
    // ------------------------------- methods -------------------------------
    // constructor
    function PhotosService(http) {
        this.http = http;
        // ------------------------------- variables -------------------------------
        this._photosDataURL = "app/data.json";
    }
    // http request to fetch photo data
    PhotosService.prototype.getPhotosHandler = function () {
        return this.http.get(this._photosDataURL)
            .map(this._photosDataSuccessHandler)
            .catch(this._photosDataErrorHandler);
    };
    PhotosService.prototype._photosDataSuccessHandler = function (res) {
        var body = res.json();
        return body || [];
    };
    PhotosService.prototype._photosDataErrorHandler = function (error) {
        var errMsg = "";
        if (error instanceof http_1.Response) {
            errMsg = error.json() || '';
        }
        else {
            errMsg = error;
        }
        return Observable_1.Observable.throw(errMsg);
    };
    // tag handlers
    PhotosService.prototype.addTag = function (photoObj) {
        var tags = photoObj.tags;
        var length = String(tags.length + 1);
        var tag = {
            "id": length,
            "message": "",
            "x": "50%",
            "y": "50%"
        };
        tags.push(tag);
        return tag;
    };
    PhotosService.prototype.removeTag = function (photoObj, tagIndex) {
        var tags = photoObj.tags;
        tags.splice(tagIndex, 1);
    };
    PhotosService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PhotosService);
    return PhotosService;
}());
exports.PhotosService = PhotosService;
//# sourceMappingURL=photos.service.js.map