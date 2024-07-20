import { ComponentFixture, TestBed, fakeAsync, flushMicrotasks, tick } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { ContentService } from '../../services/content.service';
import { ContentServiceMock } from '../../tests/service-mocks/content-service.mock';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent, NoopAnimationsModule, HttpClientTestingModule],
      providers: [
        { provide: ContentService, useClass: ContentServiceMock }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should perform a search after 400 ms', fakeAsync(() => {
    spyOn(component['contentService'], 'getSearchResults').and.callThrough();
    component.searchControl.setValue('test');
    expect(component['contentService'].getSearchResults).not.toHaveBeenCalled();
    tick(401);
    expect(component['contentService'].getSearchResults).toHaveBeenCalled();
  }));

  it('should show no results message when no results are found', fakeAsync(() => {
    spyOn(component['contentService'], 'getSearchResults').and.returnValue(Promise.resolve({ results: [], total_results: 0, page: 0, total_pages: 0}));
    component.searchControl.setValue('no results');
    tick(401);
    expect(component.noResults).toBeTrue();
    expect(component.results).toBeUndefined();
  }));

  it('should show not found when response trhows an error ', fakeAsync(() => {
    spyOn(component['contentService'], 'getSearchResults').and.callFake(() => Promise.reject(new Error('test error')));
      component.searchControl.setValue('no results');
      tick(402);
      expect(component.noResults).toBeTrue();
      expect(component.results).toBeUndefined();
  }));

});
