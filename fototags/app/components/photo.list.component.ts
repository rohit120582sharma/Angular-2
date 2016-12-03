import { Component } from "@angular/core";
import { PhotosService } from "../services/photos.service";

@Component({
	selector: 'photos-component',
	template: `
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<h1 class="heading text-center">Foto Tags</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-6 col-md-6" *ngFor="let photo of _photosArr;">
					<photo-list-item-component [photo]="photo"></photo-list-item-component>
				</div>
			</div>
		</div>
	`
})
export class PhotoListComponent{
	// ------------------------------- Variables -------------------------------
	private _photosArr:any;

	// ------------------------------- Methods -------------------------------
	// constructor
	constructor(private photosService:PhotosService){
		this._photosArr = [];
	}
	// life cycle
	ngOnInit(){
		this.photosService.getPhotosHandler().subscribe((res)=>{
			this._photosArr = res;
		});
	}
}