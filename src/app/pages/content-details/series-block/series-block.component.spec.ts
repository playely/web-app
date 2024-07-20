import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesBlockComponent } from './series-block.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { detailsSeasonsMock } from '../../../tests/data-mocks/content.mock';

describe('SeriesBlockComponent', () => {

  describe('No Seasons', () => {
    let component: SeriesBlockComponent;
    let fixture: ComponentFixture<SeriesBlockComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [SeriesBlockComponent, NoopAnimationsModule],
      })
        .compileComponents();

      fixture = TestBed.createComponent(SeriesBlockComponent);
      component = fixture.componentInstance;
      component.currentSeason = detailsSeasonsMock[0];
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
      expect(component.singleSeason).toBeTrue();
      expect(component.prevSeason).toBeUndefined();
      expect(component.nextSeason).toBeUndefined();
    });
  });

  describe('Multiple Seasons', () => {
    let component: SeriesBlockComponent;
    let fixture: ComponentFixture<SeriesBlockComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [SeriesBlockComponent, NoopAnimationsModule],
      })
        .compileComponents();

      fixture = TestBed.createComponent(SeriesBlockComponent);
      component = fixture.componentInstance;
      component.seasons = detailsSeasonsMock;
      component.currentSeason = detailsSeasonsMock[0];
      component.nextSeason = detailsSeasonsMock[1];
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
      expect(component.singleSeason).toBeFalse();
      expect(component.prevSeason).toBeUndefined();
      expect(component.currentSeason).toBeDefined();
      expect(component.nextSeason).toBeDefined();
    });

    it('Select a new season', () => {
      const spy = spyOn(component.changeSeason, 'emit');
      component.onSelectChange(134965);
      expect(spy).toHaveBeenCalledWith(134965);
      expect(component.prevSeason?.id).toBe(309556);
      expect(component.nextSeason?.id).toBe(368014);
    });

    it('select the prev season', () => {
      component.prevSeason = detailsSeasonsMock[0];
      component.currentSeason = detailsSeasonsMock[1];
      component.nextSeason = detailsSeasonsMock[2];
      component.onPreviousSeason();
      expect(component.selectedSeason.value).toBe(309556);
    });

    it('select the next season', () => {
      component.prevSeason = detailsSeasonsMock[0];
      component.currentSeason = detailsSeasonsMock[1];
      component.nextSeason = detailsSeasonsMock[2];
      component.onNextSeason();
      expect(component.selectedSeason.value).toBe(368014);
    });
  });

  describe('Single Season', () => {
    let component: SeriesBlockComponent;
    let fixture: ComponentFixture<SeriesBlockComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [SeriesBlockComponent, NoopAnimationsModule],
      })
        .compileComponents();

      fixture = TestBed.createComponent(SeriesBlockComponent);
      component = fixture.componentInstance;
      component.seasons = [...[detailsSeasonsMock[0]]];
      component.currentSeason = detailsSeasonsMock[0];
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
      expect(component.singleSeason).toBeTrue();
    });

    it('select the prev season', () => {
      component.onPreviousSeason();
      expect(component.currentSeason?.id).toBe(309556);
      expect(component.prevSeason).toBeUndefined();
    });

    it('select the next season', () => {
      component.onNextSeason();
      expect(component.currentSeason?.id).toBe(309556);
      expect(component.nextSeason).toBeUndefined();
    });
  });
});
