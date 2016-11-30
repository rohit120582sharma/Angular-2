import { Injectable } from "@angular/core";

Injectable()
export class MenusService{
	// -------------------- Variables --------------------
	private menus:any = [
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
	private selectedMenu:any = {
	};

	// -------------------- Methods --------------------
	// constructor
	constructor(){
	}
	// get and set for menus data
	public getMenus():any{
		return this.menus;
	}
	// get and set for search query
	public getSelectedMenu():any{
		return this.selectedMenu;
	}
	public setSelectedMenu(val:any){
		this.selectedMenu = val;
		console.log(this.selectedMenu.title);
	}
}