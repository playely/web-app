import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCollectionComponent } from './content-collection.component';
import { ActivatedRoute, provideRouter, Router } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { ContentServiceMock } from '../../tests/service-mocks/content-service.mock';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

describe('ContentCollectionComponent', () => {
  let component: ContentCollectionComponent;
  let fixture: ComponentFixture<ContentCollectionComponent>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['getCurrentNavigation']);
    const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', ['root']);
    activatedRouteSpy['params'] = new Observable();
    await TestBed.configureTestingModule({
      imports: [ContentCollectionComponent, HttpClientTestingModule],
      providers: [
        { provide: ContentService, useClass: ContentServiceMock },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the title to empty if state is not present', () => {
    component.getCollection('movies', 1);
    expect(component.title).toBe('');
  });

  // it('should fetch movies and set contentList for mediaType movies', async () => {
  //   const mockResponse = { results: ['Movie1', 'Movie2'] };
  //   contentService.getDiscoverMovies.and.returnValue(Promise.resolve(mockResponse));
    
  //   await component.getCollection('movies', 1);
    
  //   expect(contentService.getDiscoverMovies).toHaveBeenCalledWith(1, '1');
  //   expect(component.contentList).toEqual(mockResponse.results);
  // });

  // it('should fetch series and set contentList for mediaType tv', async () => {
  //   const mockResponse = { results: ['Series1', 'Series2'] };
  //   contentService.getDiscoverSeries.and.returnValue(Promise.resolve(mockResponse));
    
  //   await component.getCollection('tv', 1);
    
  //   expect(contentService.getDiscoverSeries).toHaveBeenCalledWith(1, '1');
  //   expect(component.contentList).toEqual(mockResponse.results);
  // });

  // it('should handle mediaType other than movies or tv', async () => {
  //   component.getCollection('music', 1);
    
  //   expect(contentService.getDiscoverMovies).not.toHaveBeenCalled();
  //   expect(contentService.getDiscoverSeries).not.toHaveBeenCalled();
  // });
  
});
