// Other Modules
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
// Components/Views
import { MenusComponent } from "./components/menus/menus.component";
import { MenusSearchComponent } from "./components/menus/menus.search.component";
import { MenusListComponent } from "./components/menus/menus.list.component";
import { MenusCustomizeModalComponent } from "./components/menus/menus.customize.modal.component";
// Services
import { MenusService } from "./services/menus.service";
// Pipe/Filer
import { MenusSearchPipe } from "./pipes/menus.search.pipe";

// ------------------ Decorator and Class ------------------
@NgModule({
	imports:[
		BrowserModule,
		HttpModule,
		FormsModule
	],
	providers:[
		MenusService
	],
	declarations:[
		MenusComponent,
		MenusSearchComponent,
		MenusListComponent,
		MenusCustomizeModalComponent,
		MenusSearchPipe
	],
	bootstrap:[
		MenusComponent
	]
})
export class AppModule{
}