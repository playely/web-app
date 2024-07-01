import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCTRLBarComponent } from './player-ctrl-bar.component';

describe('PlayerCTRLBarComponent', () => {
  let component: PlayerCTRLBarComponent;
  let fixture: ComponentFixture<PlayerCTRLBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerCTRLBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerCTRLBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle full screen', () => {
    component.isFullscreen = true;
    component.toggleFullscreen();
    expect(component.isFullscreen).toBeFalse();
  });

  it('should toggle picture-in-picture', () => {
    component.isPip = true;
    component.togglePip();
    expect(component.isPip).toBeFalse();
  });

  it('should toggle sound', () => {
    component.isMute = true;
    component.toggleSound();
    expect(component.isMute).toBeFalse();
  });

  it('should add time on forward with current time zero', () => {
    component.currentTime = 0;
    component.onForward();
    expect(component.currentTime).toBe(0);
  });

  it('should remove time on rewind', () => {
    component.currentTime = 42000;
    component.onBackward();
    expect(component.currentTime).toBe(32000);
  });

  it('should remove time on rewind', () => {
    const time = component.currentTime;
    component.onBackward();
    expect(component.currentTime).toBe(time - 10000);
  });

  it('should manage the seekbar ', () => {
    const div = document.createElement('input');
    Object.defineProperty(div, 'valueAsNumber', { writable: true, configurable: true, value: 5000 });
    component.onValueChange({ target: div } as any);
    expect(component.currentTime).toBe(5000);
  });

});
