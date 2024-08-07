import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTitleComponent } from './card-title.component';
import { provideRouter } from '@angular/router';

describe('CardTitleComponent', () => {
  let component: CardTitleComponent;
  let fixture: ComponentFixture<CardTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTitleComponent],
      providers: [
        provideRouter([]),
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
