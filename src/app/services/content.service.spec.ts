import { TestBed } from '@angular/core/testing';
import { ContentService } from './content.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { contentDetailsMock, contentGenresMock, contentMoviesMock, contentSeasonMock, contentSeriesMock, contentTop10Mock, contentTrendingMock } from '../tests/data-mocks/content.mock';

describe('ContentService', () => {
  let service: ContentService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContentService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(ContentService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a collection of movies', async () => {
    const response$ = service.getDiscoverMovies();
    const req = httpTesting.expectOne('https://api.themoviedb.org/3/discover/movie?page=1?append_to_response=imagessort_by=popularity.desc', 'Request to load discover movies');
    expect(req.request.method).toBe('GET');
    req.flush(contentMoviesMock);
    expect(await response$).toEqual(contentMoviesMock);
    httpTesting.verify();
  });

  it('should return a collection of series', async () => {
    const response$ = service.getDiscoverSeries();
    const req = httpTesting.expectOne('https://api.themoviedb.org/3/discover/tv?page=1?append_to_response=imagessort_by=popularity.desc', 'Request to load discover movies');
    expect(req.request.method).toBe('GET');
    req.flush(contentSeriesMock);
    expect(await response$).toEqual(contentSeriesMock);
    httpTesting.verify();
  });

  it('should return a trending content by time', async () => {
    const response$ = service.getTrending();
    const req = httpTesting.expectOne('https://api.themoviedb.org/3/trending/all/day', 'Request to load trending content');
    expect(req.request.method).toBe('GET');
    req.flush(contentTrendingMock);
    expect(await response$).toEqual(contentTrendingMock);
    httpTesting.verify();
  });

  it('should return the top 10 contents', async () => {
    const response$ = service.getTopSeries();
    const req = httpTesting.expectOne('https://api.themoviedb.org/3/tv/top_rated?append_to_response=images', 'Request to load top 10 content');
    expect(req.request.method).toBe('GET');
    req.flush(contentTop10Mock);
    expect(await response$).toEqual(contentTop10Mock);
    httpTesting.verify();
  });

  it('should return the content details', async () => {
    const response$ = service.getDetails('tv', 164984);
    const req = httpTesting.expectOne('https://api.themoviedb.org/3/tv/164984?append_to_response=credits,images,keywords,recommendations,similar,providers,seasons', 'Request to load details content');
    expect(req.request.method).toBe('GET');
    req.flush(contentDetailsMock);
    expect(await response$).toEqual(contentDetailsMock as any);
    httpTesting.verify();
  });

  it('should return the season details', async () => {
    const response$ = service.getSeasonDetails(988979, 164984);
    const req = httpTesting.expectOne('https://api.themoviedb.org/3/tv/988979/season/164984?append_to_response=details', 'Request to load season details content');
    expect(req.request.method).toBe('GET');
    req.flush(contentSeasonMock);
    expect(await response$).toEqual(contentSeasonMock as any);
    httpTesting.verify();
  });

  it('should return movies genres', async () => {
    const response$ = service.getMovieGenres();
    const req = httpTesting.expectOne('https://api.themoviedb.org/3/genre/movie/list', 'Request to load movies genres');
    expect(req.request.method).toBe('GET');
    req.flush(contentGenresMock);
    expect(await response$).toEqual(contentGenresMock);
    httpTesting.verify();
  });

  it('should return series genres', async () => {
    const response$ = service.getSeriesGenres();
    const req = httpTesting.expectOne('https://api.themoviedb.org/3/genre/tv/list', 'Request to load tv genres');
    expect(req.request.method).toBe('GET');
    req.flush(contentGenresMock);
    expect(await response$).toEqual(contentGenresMock);
    httpTesting.verify();
  });

  it('should return search results', async () => {
    const response$ = service.getSearchResults('house');
    const req = httpTesting.expectOne('https://api.themoviedb.org/3/search/multi?query=house&include_adult=false&language=en-US&page=1', 'Request to search results');
    expect(req.request.method).toBe('GET');
    req.flush(contentSeriesMock);
    expect(await response$).toEqual(contentSeriesMock);
    httpTesting.verify();
  });

});
