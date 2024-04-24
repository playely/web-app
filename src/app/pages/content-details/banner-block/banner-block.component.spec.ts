import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerBlockComponent } from './banner-block.component';

describe('BannerBlockComponent', () => {
  let component: BannerBlockComponent;
  let fixture: ComponentFixture<BannerBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
