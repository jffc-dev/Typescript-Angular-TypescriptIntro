import { Pipe, PipeTransform } from "@angular/core";
import { Hero } from "../interfaces/hero.interface";

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform{

  transform(heroes: Hero[], sortBy?: keyof Hero | '', typeSort?: 1 | -1): Hero[] {

    if(sortBy && typeSort)
      return heroes.sort((a,b)=> (a[sortBy] > b[sortBy]) ? 1*typeSort : -1*typeSort)
    else
      return heroes

  }

}
