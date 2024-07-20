import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { BannerComponent } from './banner.component';
import { contentTop10Mock } from '../../tests/data-mocks/content.mock';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { createMockTouchEvent } from '../../tests/event-mocks/swipe.mock';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerComponent, HttpClientTestingModule,],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    component.contentList = contentTop10Mock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should move to the next slide', () => {
    component.next();
    expect(component.selectedContentIndex).toBe(1);
    component.next();
    expect(component.selectedContentIndex).toBe(0);
  });

  it('should not move next with no content', () => {
    component.contentList = undefined;
    component.next();
    expect(component.selectedContentIndex).toBe(0);
  });

  it('should not move prev with no content', () => {
    component.contentList = undefined;
    component.previous();
    expect(component.selectedContentIndex).toBe(0);
  });

  it('should move to the prev slide', () => {
    component.selectedContentIndex = 1;
    component.previous();
    expect(component.selectedContentIndex).toBe(0);
    component.previous();
    expect(component.selectedContentIndex).toBe(1);
  });

  it('should select a slide', () => {
    component.select(1);
    expect(component.selectedContentIndex).toBe(1);
  });

});
