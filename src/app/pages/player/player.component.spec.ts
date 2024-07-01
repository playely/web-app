import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerComponent } from './player.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingHarness } from '@angular/router/testing';
import { contentDetailsMock } from '../../tests/data-mocks/content.mock';
import { Router } from '@angular/router';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async () => {
    const routerStub = jasmine.createSpyObj('router', ['navigate', 'getCurrentNavigation']);
    routerStub.getCurrentNavigation.and.returnValue({ extras: { state: contentDetailsMock } });
    await TestBed.configureTestingModule({
      imports: [PlayerComponent, NoopAnimationsModule],
      providers: [{ provide: Router, useValue: routerStub }]
    })
    .compileComponents();
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.content).toBeDefined();
  });
});
