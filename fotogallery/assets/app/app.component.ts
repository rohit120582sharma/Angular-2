import { Component } from "@angular/core";

@Component({
	selector: 'app-component',
	template: `
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<input type="text" class="search form-controller mb30" id="search" name="search" placeholder="Search" [(ngModel)]="search">
				</div>
			</div>
		</div>
		<menues-list-component></menues-list-component>
		<menu-modal-component></menu-modal-component>
	`
})
export class AppComponent {
	private search:string="";
	constructor(){
	}
}