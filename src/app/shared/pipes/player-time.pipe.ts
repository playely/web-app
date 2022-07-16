import { Pipe, PipeTransform } from '@angular/core';
import { formatTime } from '../utils/player-utils';

@Pipe({
  name: 'FormatedTime'
})
export class PlayerTimePipe implements PipeTransform {

  transform(contentSecs: number): string {
    return formatTime(contentSecs);
  }

}
