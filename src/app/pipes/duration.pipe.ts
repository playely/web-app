import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {

  transform(runtime: number): unknown {
    const h = Math.floor(runtime / 60);
    const m = runtime % 60;
    if (h <= 0) return runtime+' min';
    return `${h} h ${m} min`;
  }

}
