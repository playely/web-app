import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from '../../../services/user.service';
import { provideRouter } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInComponent, NoopAnimationsModule],
      providers: [
        UserService, 
        provideRouter([]),
        { provide: MatSnackBar, useValue: { open: ()=> {}, dismiss: ()=> {} } },
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignInComponent);
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

  it('should navigate to home if sign in is successful', () => {
    spyOn(component['userService'], 'signIn').and.returnValue(true);
    spyOn(component['router'], 'navigate');
    component.signInForm.patchValue({
      email: 'test@test.com',
      password: 'password1234',
    });
    component.onSubmit();
    expect(component['router'].navigate).toHaveBeenCalledWith(['/']);
  });

  it('should show snackbar if sign in is unsuccessful', () => {
    spyOn(component['userService'], 'signIn').and.returnValue(false);
    spyOn(component['snackBar'], 'open');
    component.signInForm.patchValue({
      email: 'test@test.com',
      password: 'password1234',
    })
    component.onSubmit();
    expect(component['snackBar'].open).toHaveBeenCalled();
  });

  it('should fill the form with dummy registered user account', () => {
    component.fillform();
    expect(component.signInForm.value).toEqual({ email: 'user@playely.com', password: 'play123456' });
  });

});
