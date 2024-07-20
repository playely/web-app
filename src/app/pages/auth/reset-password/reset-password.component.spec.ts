import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordComponent } from './reset-password.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from '../../../services/user.service';
import { provideRouter } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';

describe('ResetPasswordComponent', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPasswordComponent, NoopAnimationsModule],
      providers: [
        UserService, 
        provideRouter([]),
        { provide: MatSnackBar, useValue: { open: ()=> { return { afterDismissed: ()=>of(true) } }, dismiss: ()=> {} } },
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dismiss snackbar on destroy', () => {
    spyOn(component['snackBar'], 'dismiss');
    component.keepSnakBar = false;
    component.ngOnDestroy();
    expect(component['snackBar'].dismiss).toHaveBeenCalled();
  });

  it('should not dismiss snackbar on destroy', () => {
    spyOn(component['snackBar'], 'dismiss');
    component.keepSnakBar = true;
    component.ngOnDestroy();
    expect(component['snackBar'].dismiss).not.toHaveBeenCalled();
  });

  it('should navigate to home if reset password is successful', () => {
    spyOn(component['userService'], 'setNewPassword').and.returnValue(true);
    spyOn(component['router'], 'navigate');
    component.resetPasswordForm.patchValue({
      password: 'password1234',
      confirmPassword: 'password1234',
    });
    component.onSubmit();
    expect(component['router'].navigate).toHaveBeenCalledWith(['/auth']);
  });

  it('should show snackbar if reset password is unsuccessful', () => {
    spyOn(component['userService'], 'setNewPassword').and.returnValue(false);
    spyOn(component['snackBar'], 'open');
    component.resetPasswordForm.patchValue({
      password: 'password1234',
      confirmPassword: 'password1234',
    });
    component.onSubmit();
    expect(component['snackBar'].open).toHaveBeenCalled();
  });

});
