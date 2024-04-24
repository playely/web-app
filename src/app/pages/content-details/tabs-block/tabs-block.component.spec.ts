import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsBlockComponent } from './tabs-block.component';

describe('TabsBlockComponent', () => {
  let component: TabsBlockComponent;
  let fixture: ComponentFixture<TabsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
