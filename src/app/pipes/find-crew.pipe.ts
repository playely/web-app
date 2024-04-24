import { Pipe, PipeTransform } from '@angular/core';
import { TMDBPeople } from '@models/tmdb/TMDBPeople';

interface Crew {
  cast?: TMDBPeople[];
  crew?: TMDBPeople[];
}

@Pipe({
  name: 'findCrew',
  standalone: true
})
export class FindCrewPipe implements PipeTransform {

  transform(credits: Crew, department: string = '', separator: string = ", "): unknown {
    if (!credits.crew) return '';
    return credits.crew
    .filter(item=>item.known_for_department?.toLowerCase().includes(department.toLowerCase()))
    .join(separator);
  }

}
