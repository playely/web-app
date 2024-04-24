import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separator',
  standalone: true
})
export class SeparatorPipe implements PipeTransform {

  transform(array: any[] | undefined, separator: string = ', '): unknown {
    if (!array) return '';
    return array.map(item=>item.name).join(separator);
  }

}
