import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideCardComponent } from './inside-card.component';

describe('InsideCardComponent', () => {
  let component: InsideCardComponent;
  let fixture: ComponentFixture<InsideCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsideCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
