import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filterValue:string): any {
    return items.filter(i => i.name.includes(filterValue))
  }

}
