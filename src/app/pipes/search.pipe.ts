import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: any): any[] {
    if (items && searchText) {
      return items.filter(item => {
        let str = '';
        Object.getOwnPropertyNames(item).forEach((f) => {
          str += item[f];
        });
        return str.toLowerCase().includes(searchText.toLowerCase());
      });
    }
    return items;
  }

}
