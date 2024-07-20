import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMenuComponent } from './settings-menu.component';
import { provideRouter } from '@angular/router';

describe('SettingsMenuComponent', () => {
  let component: SettingsMenuComponent;
  let fixture: ComponentFixture<SettingsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsMenuComponent],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
