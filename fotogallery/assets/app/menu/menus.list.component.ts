import { Component } from "@angular/core";
import { MenusService } from "./menus.service";

@Component({
	selector: 'menues-list-component',
	template: `
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-6 col-md-4 mb30" *ngFor="let menu of menusList">
					<div class="comp-menu-item">
						<h4 class="text-center" [ngStyle]="">{{menu.title}}</h4>
						<div>
							<img [src]="menu.thumb" class="img-responsive img-thumb" />
						</div>
						<a href="#" class="btn btnBlue" (click)="editHandler(menu)">Edit</a>
					</div>
				</div>
			</div>
		</div>
	`
})
export class MenusListComponent{
	private menusList:any = [];

	constructor(private menusService:MenusService){
	}
	ngOnInit(){
		this.menusList = this.menusService.getMenusData();
	}
	editHandler(val:any){
		this.menusService.setSelectedMenu(val);
		//jQuery("#menuModal").modal();
	}
}