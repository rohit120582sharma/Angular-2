"use strict";
var core_1 = require("@angular/core");
core_1.Injectable();
var MenusService = (function () {
    // -------------------- Methods --------------------
    // constructor
    function MenusService() {
        // -------------------- Variables --------------------
        this.menus = [
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
            },
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
            },
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
            },
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
            },
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
            },
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
        this.selectedMenu = {};
    }
    // get and set for menus data
    MenusService.prototype.getMenus = function () {
        return this.menus;
    };
    // get and set for search query
    MenusService.prototype.getSelectedMenu = function () {
        return this.selectedMenu;
    };
    MenusService.prototype.setSelectedMenu = function (val) {
        this.selectedMenu = val;
        console.log(this.selectedMenu.title);
    };
    return MenusService;
}());
exports.MenusService = MenusService;
//# sourceMappingURL=menus.service.js.map