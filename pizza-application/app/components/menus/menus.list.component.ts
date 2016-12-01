import { Component, Input } from "@angular/core";
import { MenusService } from "../../services/menus.service";

@Component({
	selector: 'menus-list-component',
	template: `
		<div class="container"
			infinite-scroll [infiniteScrollDistance]="0.5"
			[infiniteScrollThrottle]="500"
			(scrolled)="onScrollDown()">
			<div class="row">
				<div class="col-xs-12 col-sm-6 col-md-4" *ngFor="let menu of (menusLazyData | searchFilter:search); let i = index">
					<div class="comp-menu-item mb30">
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
	private menusLazyData:any;
	private totalLength = 0;
	private totalVisible = 0;
	private visibleOffset = 9;

	// -------------------- Methods --------------------
	// constructor
	constructor(private menusService:MenusService){
	}
	// component life cycle
	ngOnInit(){
		this.menusData = this.menusService.getMenus();
		this.totalLength = this.menusData.length;
		this.totalVisible = 0;
		this.onScrollDown();
	}
	// edit handler
	private editHandler(val:any){
		this.menusService.setSelectedMenu(val);
	}
	private onScrollDown(){
		this.totalVisible += this.visibleOffset;
		if(this.totalVisible >= this.totalLength){
			this.totalVisible = this.totalLength;
		}
		this.menusLazyData = this.menusData.slice(0, this.totalVisible);
		console.log('scrolled down!! = ', this.totalVisible);
	}
	private confirmPresence(i:number){
		return (i<this.totalVisible);
	}
}