import { Injectable } from "@angular/core";

@Injectable()
export class MenusService{
	private data:any = [
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
	private selectedMenu:any;

	constructor(){
	}
	private getMenusData(){
		return this.data;
	}
	private getSelectedMenu(){
		return this.selectedMenu;
	}
	private setSelectedMenu(val:any){
		this.selectedMenu = val;
	}
}