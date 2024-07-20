import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ForgotPasswordComponent } from './forgot-password.component';
import { UserService } from '../../../services/user.service';
import { provideRouter } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPasswordComponent, NoopAnimationsModule],
      providers: [
        UserService, 
        provideRouter([]),
        { provide: MatSnackBar, useValue: { open: ()=> { return { afterDismissed: ()=>of(true) } }, dismiss: ()=> {} } },
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dismiss snackbar on destroy', () => {
    spyOn(component['snackBar'], 'dismiss');
    component.ngOnDestroy();
    expect(component['snackBar'].dismiss).toHaveBeenCalled();
  });

  it('should navigate to home if forgot password is successful', () => {
    spyOn(component['userService'], 'resetPassword').and.returnValue(true);
    spyOn(component['router'], 'navigate');
    component.fPasswordForm.patchValue({
      email: 'test@test.com',
    });
    component.onSubmit();
    expect(component['router'].navigate).toHaveBeenCalledWith(['/auth']);
  });

  it('should show snackbar if forgot password is unsuccessful', () => {
    spyOn(component['userService'], 'resetPassword').and.returnValue(false);
    spyOn(component['snackBar'], 'open');
    component.fPasswordForm.patchValue({
      email: 'test@test.com',
    })
    component.onSubmit();
    expect(component['snackBar'].open).toHaveBeenCalled();
  });

});
