import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SinglePlayerComponent } from './player.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';


describe('SinglePlayerComponent', () => {
  let component: SinglePlayerComponent;
  let fixture: ComponentFixture<SinglePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ 
      imports: [NoopAnimationsModule],
      providers: [provideRouter([])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle timeout in constructor', fakeAsync(() => {
    fixture = TestBed.createComponent(SinglePlayerComponent);
    component = fixture.componentInstance;
    expect(component.isLoading).toBeTrue();
    // At this point, the constructor code has run, including the timeout setup
    tick(2001);
    expect(component.isLoading).toBeFalse;
  }));

  it('should play the video', () => {
    expect(component.isPlaying).toBeTrue();
    component.togglePlay();
    expect(component.isPlaying).toBeFalse();
  });

  it('should go back by router', () => {
    component['router'].navigated = false;
    spyOn(component['router'], 'navigate');
    component.goBack();
    expect(component['router'].navigate).toHaveBeenCalled();
  });

  it('should go back by location', () => {
    component['router'].navigated = true;
    spyOn(component['location'], 'back');
    component.goBack();
    expect(component['location'].back).toHaveBeenCalled();
  });

});
