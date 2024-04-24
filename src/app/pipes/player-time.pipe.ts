import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerTime',
  standalone: true
})
export class PlayerTimePipe implements PipeTransform {

  transform(time: number): unknown {
    // Convert milliseconds to seconds
    var seconds = Math.floor(time / 1000);
    // Extract hours
    var hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    // Extract minutes
    var minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    // Format the time
    return (hours > 0 ? this.pad(hours) + ":"  : '') + this.pad(minutes) + ":" + this.pad(seconds);
  }

  private pad(number: number): string {
    if (number < 10) {
        return '0' + number;
    }
    return number + '';
}

}
