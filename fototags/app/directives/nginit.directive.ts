import { Directive, Input } from "@angular/core";

@Directive({
	selector: '[ngInit]'
})
export class NgInitDirective{
	@Input('ngInit') ngInit:any;

	ngOnInit(){
		if(this.ngInit){
			this.ngInit();
		}
	}
}