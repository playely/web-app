import { ComponentFixture, TestBed, discardPeriodicTasks, fakeAsync, tick } from '@angular/core/testing';
import { InfoComponent } from './info.component';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should manage a clock', fakeAsync(() => {
    component.ngOnInit();
    expect(component.date).toBeInstanceOf(Date);
    expect(component.clockInterval).toBeDefined();
    expect(component.deviceInfo).toBeDefined();
    const date = component.date;
    tick(1000); // Advance time by 1 second
    fixture.detectChanges();
    expect(component.date > date).toBeTrue();
    discardPeriodicTasks(); // Clean up any periodic tasks set up by the component
  }));

});
