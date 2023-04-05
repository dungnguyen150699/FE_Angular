import { Byte } from "@angular/compiler/src/util";
import { CategoryDTO } from "./CategoryDTO";

export class BookDTO{
	id : number|undefined;
	name : string = '';
	img: Byte[]|undefined;
	price: number|undefined;
	count: number|undefined;
	category: CategoryDTO|undefined;

}