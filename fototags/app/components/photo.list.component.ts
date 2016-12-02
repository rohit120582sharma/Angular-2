import { Component } from "@angular/core";
import { PhotosService } from "../services/photos.service";

declare var jQuery:any;

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
					<div class="componentPhoto">
						<div class="topWrapper">
							<h4 class="title">{{photo.title}}</h4>
							<ul class="tools">
								<li>
									<a href="#" (click)="tagsVisibleHandler($event, photo)" [style.opacity]="photo.isHide?0.2:1"><img class="img-responsive" src="assets/images/icon-show.png"></a>
								</li>
								<li>
									<a href="#" (click)="addTagHandler($event, photo)"><img class="img-responsive" src="assets/images/icon-add-comment.png"></a>
								</li>
							</ul>
						</div>
						<!-- Tags -->
						<div class="imgWrapper" [style.background-image]="'url(' + photo.image + ')'">
							<ul id="tagWrapper" class="tagWrapper" *ngIf="!photo.isHide">
								<li *ngFor="let tag of photo.tags; let i = index;" [ngStyle]="setTagPosition(tag.x, tag.y)" class="draggable ui-widget-content">
									<img class="img-responsive" src="assets/images/icon-comment.png">
								</li>
							</ul>
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
		this._photosArr = [];
	}
	// life cycle
	ngOnInit(){
		this.photosService.getPhotosHandler().subscribe((res)=>{
			this._photosArr = res;
			this._photosArr.forEach(function(element, index){
				element.isHide = false;
			});
		});
	}
	ngAfterViewChecked(){
		jQuery(".draggable").each(function(index, element){
			console.log(index, element);
			element.draggable({ containment:"#tagWrapper", scroll: false });
		});
	}
	// tag handlers
	private tagsVisibleHandler(event, photoObject){
		photoObject.isHide = !photoObject.isHide;
		return false;
	}
	private addTagHandler(event, photoObject:any){
		this.photosService.addTag(photoObject);
		return false;
	}
	private setTagPosition(x:String, y:String):any{
		let styles = {
			'top':  y,
			'left': x
		};
		return styles;
	}
}