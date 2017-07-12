import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, orderBy: string): any {
    return value.sort(
      (a, b) => {
        if (a[orderBy] < b[orderBy]) {
          return -1;
        }
        if (a[orderBy] > b[orderBy]) {
          return 1;
        }
        return 0;
      });
  }

}
