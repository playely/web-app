import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { provideRouter } from '@angular/router';
import { contentMoviesMock } from '../../tests/data-mocks/content.mock';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect on card click event', () => {
    spyOn(component['router'], 'navigate').and.callThrough();
    component.content = contentMoviesMock.results[0];
    component.onClick();
    expect(component['router'].navigate).toHaveBeenCalledWith(['/', 'movie', 786892]);
  });

  it('should not redirect on card click event with empty content', () => {
    spyOn(component['router'], 'navigate').and.callThrough();
    component.onClick();
    expect(component['router'].navigate).not.toHaveBeenCalledWith(['/', 'movie', 786892]);
  });

  it('should open dialog on card click event', () => {
    spyOn(component['dialog'], 'open').and.returnValue({} as any);
    component.content = contentMoviesMock.results[0];
    component.clickMode = 'modal';
    component.onClick();
    expect(component['dialog'].open).toHaveBeenCalled();
  });

  it('manage image error', () => {
    const image = document.createElement('img');
    const error = new Event('error');
    Object.defineProperty(error, 'target', {value: image});
    component.manageError(error);
    expect(image.style.visibility).toBe('hidden');
  });

});
