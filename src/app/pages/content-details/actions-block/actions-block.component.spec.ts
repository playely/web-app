import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsBlockComponent } from './actions-block.component';

describe('ActionsBlockComponent', () => {
  let component: ActionsBlockComponent;
  let fixture: ComponentFixture<ActionsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionsBlockComponent]
    })
    .compileComponents();
    localStorage.clear();    
    fixture = TestBed.createComponent(ActionsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.enableToggleFavs).toBeFalse();
  });

  it('should enable toggle favourites', () => {
    localStorage.setItem('user', JSON.stringify({id: 1}));
    expect(component.enableToggleFavs).toBeTrue();
  });

  it('should toggle favourite state', () => {
    component.toggleFavourite();
    expect(component.isFavourite).toBeTrue();
    component.toggleFavourite();
    expect(component.isFavourite).toBeFalse();    
  });
});