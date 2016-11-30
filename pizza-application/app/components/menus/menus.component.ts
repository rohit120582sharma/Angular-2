import { Component } from "@angular/core";

@Component({
	selector: 'menus-component',
	template: `
		<search-component (searchInput)="searchInputListener($event)"></search-component>
		<menus-list-component [search]="searchInput"></menus-list-component>
		<menus-customize-modal></menus-customize-modal>
	`
})
export class MenusComponent{
	// -------------------- Variables --------------------
	private searchInput:string = "";

	// -------------------- Methods --------------------
	// constructor
	constructor(){
	}
	//
	public searchInputListener(val){
		this.searchInput = val;
	}
}