import { Component, Input } from "@angular/core";
import { MenusService } from "../../services/menus.service";

@Component({
	selector: 'menus-list-component',
	template: `
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-6 col-md-4 mb30" *ngFor="let menu of (menusData | searchFilter:search)">
					<div class="comp-menu-item">
						<h4 class="text-center">{{menu.title}}</h4>
						<div>
							<img [src]="menu.thumb" class="img-responsive img-thumb" />
						</div>
						<a href="#" class="btn btnBlue" (click)="editHandler(menu)" data-toggle="modal" data-target="#menusModal">Edit</a>
					</div>
				</div>
			</div>
		</div>
	`
})
export class MenusListComponent{
	// -------------------- Input/Output --------------------
	@Input('search') search:string;

	// -------------------- Variables --------------------
	private menusData:any;

	// -------------------- Methods --------------------
	// constructor
	constructor(private menusService:MenusService){
	}
	// component life cycle
	ngOnInit(){
		this.menusData = this.menusService.getMenus();
	}
	// edit handler
	private editHandler(val:any){
		this.menusService.setSelectedMenu(val);
	}
}