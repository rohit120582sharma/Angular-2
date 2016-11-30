import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: 'searchFilter'
})
export class MenusSearchPipe implements PipeTransform{
	transform(val:any, param:string){
		return val.filter(function(item){
			var title = String(item.title).toLowerCase();
			var paramVal = String(param).toLowerCase();
			return title.includes(paramVal);
		});
	}
}