import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TextTime'
})
export class TextTimePipe implements PipeTransform {

  transform(contentSecs: number): string {
    if (contentSecs && contentSecs > 0) {
      const hours = Math.trunc((contentSecs / 3600));
      const mins = Math.trunc(((contentSecs - hours * 3600) / 60));
      return `${hours}${hours > 1 ? 'hs' : 'h'} ${mins}m`;
    }
    return '';
  }

}
