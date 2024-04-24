import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPersonalComponent } from './content-personal.component';

describe('ContentPersonalComponent', () => {
  let component: ContentPersonalComponent;
  let fixture: ComponentFixture<ContentPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentPersonalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
