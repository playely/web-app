import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TMDBCredits } from '@models/tmdb/TMDBDetail';
import { TMDBPeople } from '@models/tmdb/TMDBPeople';

interface TMDBDepartment {
  key: string;
  values: TMDBPeople[];
}

@Component({
  selector: 'app-credits',
  standalone: true,
  imports: [],
  templateUrl: './credits.component.html',
  styleUrl: './credits.component.scss'
})
export class CreditsComponent {
  cast?: TMDBPeople[];
  crew?: TMDBDepartment[];

  constructor(
    public dialogRef: MatDialogRef<CreditsComponent>,
    @Inject(MAT_DIALOG_DATA) data: TMDBCredits,
  ) {
    this.cast = data.cast;
    if (data.crew) {
      const groupedData = data.crew.reduce((departments: any, people: TMDBPeople) => { 
        const group = people.department? people.department :'unknown'; 
        if (!departments[group]) { 
          departments[group] = []; 
        } 
        departments[group].push(people); 
        return departments; 
      }, {});
      const newObjects = Object.keys(groupedData).map(key => ({
        key: key,
        values: groupedData[key]
      }));
      newObjects.sort((a, b) => a.key.localeCompare(b.key));
      this.crew = newObjects;
    }
  }
}
