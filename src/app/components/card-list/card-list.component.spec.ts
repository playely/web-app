import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListComponent } from './card-list.component';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.swiperContainer = { nativeElement: { swiper: { slidePrev: () => {}, slideNext: () => {} } } } as any;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should move the carousel to the left', () => {
    spyOn((component.swiperContainer?.nativeElement.swiper as any), 'slidePrev');
    component.prev();
    expect((component.swiperContainer?.nativeElement.swiper as any).slidePrev).toHaveBeenCalled();
  });

  it('should move the carousel to the right', () => {
    spyOn((component.swiperContainer?.nativeElement.swiper as any), 'slideNext');
    component.next();
    expect((component.swiperContainer?.nativeElement.swiper as any).slideNext).toHaveBeenCalled();
  });
});
