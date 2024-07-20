import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEpisodeComponent } from './dialog-episode.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideRouter } from '@angular/router';

describe('DialogEpisodeComponent', () => {
  let component: DialogEpisodeComponent;
  let fixture: ComponentFixture<DialogEpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEpisodeComponent],
      providers: [
        provideRouter([]),
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should manage image error', () => {
    const imageEvent = new Event('error');
    const image = document.createElement('img');
    image.src='/error.svg';
    Object.defineProperty(imageEvent, 'target', {value: image});
    component.manageError(imageEvent);
    expect(image.style.visibility).toBe('hidden');
  });
});
