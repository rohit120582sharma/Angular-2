import { Component } from "@angular/core";
import { MenusService } from "./menus.service";

@Component({
	selector: 'menu-modal-component',
	template: `
		<div class="modal fade" id="menuModal" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title">{{selectedMenu.title}}</h4>
					</div>
					<div class="modal-body"></div>
				</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div>
	`
})
export class MenuModalComponent{
	private selectedMenu:any = {
		title: ""
	};
	constructor(private menusService:MenusService){
	}
	ngOnInit(){
		this.selectedMenu = this.menusService.getSelectedMenu();
	}
}