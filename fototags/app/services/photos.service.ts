import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
// Operators and Statics
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PhotosService{
	// ------------------------------- variables -------------------------------
	private _photosDataURL:string = "app/data.json";

	// ------------------------------- methods -------------------------------
	// constructor
	constructor(private http:Http){
	}
	// fetch photo data
	public getPhotosHandler(){
		return this.http.get(this._photosDataURL)
						.map(this._photosDataReceiveHandler)
						.catch(this._photosDataErrorHandler);
	}
	private _photosDataReceiveHandler(res:Response){
		alert("success");
		let body = res.json();
		return body.data || [];
	}
	private _photosDataErrorHandler(error:Response){
		alert("error");
		let errMsg: string = error.message ? error.message : error.toString();
		return Observable.throw(errMsg);
	}
}