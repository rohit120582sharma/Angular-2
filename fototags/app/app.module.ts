// Other Modules
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
// Components/Views
import { PhotoListComponent } from "./components/photo.list.component";
import { PhotoListItemComponent } from "./components/photo.list.item.component";
import { NgInitDirective } from "./directives/nginit.directive";
// Services
import { PhotosService } from "./services/photos.service";
// Pipe/Filer

// ------------------ Decorator and Class ------------------
@NgModule({
	imports:[
		BrowserModule,
		HttpModule,
		FormsModule
	],
	providers:[
		PhotosService
	],
	declarations:[
		PhotoListComponent,
		PhotoListItemComponent,
		NgInitDirective
	],
	bootstrap:[
		PhotoListComponent
	]
})
export class AppModule{
}