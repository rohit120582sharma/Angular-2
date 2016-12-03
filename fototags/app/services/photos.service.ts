import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
// adds ALL RxJS statics & operators to Observable
import 'rxjs/Rx';

@Injectable()
export class PhotosService{
	// ------------------------------- variables -------------------------------
	private _photosDataURL:string = "app/data.json";

	// ------------------------------- methods -------------------------------
	// constructor
	constructor(private http:Http){
	}
	// http request to fetch photo data
	public getPhotosHandler(){
		return this.http.get(this._photosDataURL)
						.map(this._photosDataSuccessHandler)
						.catch(this._photosDataErrorHandler);
	}
	private _photosDataSuccessHandler(res:Response){
		let body = res.json();
		return body || [];
	}
	private _photosDataErrorHandler(error:Response){
		let errMsg:String = "";
		if(error instanceof Response){
			errMsg = error.json() || '';
		}else{
			errMsg = error;
		}
		return Observable.throw(errMsg);
	}
	// tag handlers
	public addTag(photoObj:any){
		let tags = photoObj.tags;
		let length = String(tags.length+1);
		let tag:any = {
			"id": length,
			"message": "",
			"x": "50%",
			"y": "50%"
		}
		tags.push(tag);
		console.log(tag);
	}
	public removeTag(photoObj:any, tagIndex:Number){
		let tags = photoObj.tags;
		tags.splice(tagIndex, 1);
	}
}