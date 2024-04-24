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
    
    fixture = TestBed.createComponent(ActionsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
