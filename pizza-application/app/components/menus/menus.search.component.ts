import { Component, EventEmitter, Output } from "@angular/core";
import { MenusService } from "../../services/menus.service";

@Component({
	selector: 'search-component',
	template: `
		<div class="container mb30">
			<div class="row">
				<div class="col-xs-12">
					<input type="text" class="form-control" id="search" name="search" placeholder="Search" [(ngModel)]="search" (ngModelChange)="searchHandler()" />
				</div>
			</div>
		</div>
	`
})
export class MenusSearchComponent{
	// -------------------- Input/Output --------------------
	@Output() searchInput = new EventEmitter<string>();

	// -------------------- Variables --------------------
	private search:string;

	// -------------------- Methods --------------------
	// constructor
	constructor(private menusService:MenusService){
	}
	// search handler
	searchHandler(){
		this.searchInput.emit(this.search);
	}
}