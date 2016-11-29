// externl modules
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

// views
import { AppComponent } from "./app.component";
import { MenusListComponent } from "./menu/menus.list.component";
import { MenuModalComponent } from "./menu/menu.modal.component";

// services
import { MenusService } from "./menu/menus.service";

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule
	],
	exports: [
	],
	providers: [
		MenusService
	],
	declarations: [
		AppComponent,
		MenusListComponent,
		MenuModalComponent
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule{
}