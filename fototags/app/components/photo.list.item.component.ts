import { Component, Input } from "@angular/core";
import { PhotosService } from "../services/photos.service";

declare var jQuery:any;

@Component({
	selector: 'photo-list-item-component',
	template:`
		<div class="componentPhoto">
			<!-- Top Wrapper -->
			<div class="topWrapper">
				<h4 class="title">{{photo.title}}</h4>
				<ul class="tools">
					<li>
						<a href="#" (click)="tagsVisibleHandler($event)" [style.opacity]="_isHide?0.2:1"><img class="img-responsive" src="assets/images/icon-show.png"></a>
					</li>
					<li>
						<a href="#" (click)="addTagHandler($event)"><img class="img-responsive" src="assets/images/icon-add-comment.png"></a>
					</li>
				</ul>
			</div>

			<!-- Tags -->
			<div class="imgWrapper" [style.background-image]="'url(' + photo.image + ')'">
				<ul class="tagWrapper" *ngIf="!_isHide" (click)="bgClickHandler($event)">
					<li class="draggable ui-widget-content" #liElem *ngFor="let tag of photo.tags; let i = index;" [ngStyle]="setTagPosition(tag.x, tag.y)" [ngInit]="tagInitHandler(tag, liElem)" (click)="tagClickHandler($event, tag, i)">
						<img class="img-responsive" src="assets/images/icon-comment.png">
					</li>
				</ul>
			</div>

			<!-- Message Wrapper -->
			<div class="messageWrapper" *ngIf="_selectedTag">
				<ul>
					<li><a href="#" (click)="editTagHandler($event, message)"><img class="img-responsive" src="assets/images/icon-pencil.png"></a></li>
					<li><a href="#" (click)="removeTagHandler($event)"><img class="img-responsive" src="assets/images/icon-delete.png"></a></li>
				</ul>
				<input #message class="message" type="text" name="message" [(ngModel)]="_selectedTag.message" [disabled]="_disabled">
			</div>
		</div>
	`
})
export class PhotoListItemComponent{
	// ------------------------------- Input/Output -------------------------------
	@Input('photo') photo:any;

	// ------------------------------- Variables -------------------------------
	private _isHide:Boolean = false;
	private _disabled:Boolean = true;
	private _selectedTag:any;
	private _selectedTagIndex:Number;

	// ------------------------------- Methods -------------------------------
	// constructor
	constructor(private photosService:PhotosService){
	}
	// background click handler
	private bgClickHandler(event=null){
		this._disabled = true;
		this._selectedTag = null;
		return false;
	}
	// tag handlers
	private tagInitHandler(tagObj:any, li:any){
		var draggable = jQuery(li);
		var tagWrapper = draggable.closest(".tagWrapper");
		draggable.draggable({
			containment:tagWrapper,
			scroll: false,
			stop: function(){
				var width = tagWrapper.width();
				var height = tagWrapper.height();
				var leftPos = jQuery(this).position().left;
				var topPos = jQuery(this).position().top;
				var leftPer = String(leftPos/width * 100) + "%";
				var topPer = String(topPos/height * 100) + "%";
				
				tagObj.x = leftPer;
				tagObj.y = topPer;
				draggable.css({'left':tagObj.x, 'top':tagObj.y});
				//console.log(tagObj);
			}
		});
	}
	private setTagPosition(x:String, y:String):any{
		let styles = {
			'top':  y,
			'left': x
		};
		return styles;
	}
	private tagsVisibleHandler(event){
		this._isHide = !this._isHide;
		this.bgClickHandler();
		return false;
	}
	private addTagHandler(event){
		this.photosService.addTag(this.photo);
		this.bgClickHandler();
		return false;
	}
	private removeTagHandler(event){
		this.photosService.removeTag(this.photo, this._selectedTagIndex);
		this.bgClickHandler();
		return false;
	}
	private editTagHandler(event, inputElem:any){
		event.stopPropagation();
		this._disabled = !this._disabled;
		setTimeout(function(){
			inputElem.focus();
		}, 100);
		return false;
	}
	private tagClickHandler(event:any, tag:any, index:Number){
		event.stopPropagation();
		this._selectedTag = tag;
		this._selectedTagIndex = index;
		return false;
	}
}