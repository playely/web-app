import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix',
  standalone: true
})
export class PrefixPipe implements PipeTransform {

  transform(value: string | number, show: boolean, separator: string): unknown {
    return show && value ? `${value}${separator}` : '';
  }

}
