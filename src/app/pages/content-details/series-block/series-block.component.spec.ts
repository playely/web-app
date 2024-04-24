import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesBlockComponent } from './series-block.component';

describe('SeriesBlockComponent', () => {
  let component: SeriesBlockComponent;
  let fixture: ComponentFixture<SeriesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeriesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
