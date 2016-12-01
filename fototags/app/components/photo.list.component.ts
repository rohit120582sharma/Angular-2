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
				<div class="col-xs-12 col-sm-6 col-md-4">
					<div class="componentPhoto">
						<div class="topWrapper">
							<h4 class="title">Work 1</h4>
							<ul class="tools">
								<li>
									<a href="#"><img class="img-responsive" src="assets/images/icon-show.png"></a>
								</li>
								<li>
									<a href="#"><img class="img-responsive" src="assets/images/icon-add-comment.png"></a>
								</li>
							</ul>
						</div>
						<div class="imgWrapper">
							<ul class="tagWrapper">
								<li><img class="img-responsive" src="assets/images/icon-comment.png"></li>
							</ul>
							<img class="img-responsive" src="assets/images/home.png">
						</div>
					</div>
				</div>
			</div>
		</div>
	`
})
export class PhotoListComponent{
	// ------------------------------- variables -------------------------------
	private _photosArr:any;

	// ------------------------------- methods -------------------------------
	// constructor
	constructor(private photosService:PhotosService){
	}
	ngOnInit(){
		this._photosArr = this.photosService.getPhotosHandler();
		console.log(this._photosArr);
	}
}