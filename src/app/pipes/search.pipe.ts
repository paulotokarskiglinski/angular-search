import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: any, fields: any): any[] {
    if (items && searchText && fields) {
      searchText = searchText.toLowerCase();
      return items.filter(item => {
        let str = '';
        fields.forEach((f) => {
          str += item[f];
        });
        return str.toLowerCase().includes(searchText);
      });
    }
    return items;
  }

}
