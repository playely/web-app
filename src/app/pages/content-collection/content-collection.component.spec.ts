import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCollectionComponent } from './content-collection.component';

describe('ContentCollectionComponent', () => {
  let component: ContentCollectionComponent;
  let fixture: ComponentFixture<ContentCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentCollectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
