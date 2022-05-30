import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FormatedTime'
})
export class PlayerTimePipe implements PipeTransform {

  transform(contentSecs: number): string {
    if (contentSecs && contentSecs > 0) {
      const hours = Math.trunc((contentSecs / 3600));
      const mins = Math.trunc(((contentSecs - hours * 3600) / 60));
      const secs = Math.trunc(contentSecs - (hours * 3600 + mins * 60));
      return `${hours < 9 ? '0' + hours : hours}:${mins < 9 ? '0' + mins : mins}:${secs < 9 ? '0' + secs : secs}`;
    }
    return '00:00:00';
  }

}
