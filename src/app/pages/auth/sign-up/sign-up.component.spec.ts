import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { UserService } from '../../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { provideRouter } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpComponent, NoopAnimationsModule],
      providers: [
        UserService, 
        provideRouter([]),
        { provide: MatSnackBar, useValue: { open: ()=> {}, dismiss: ()=> {} } },
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignUpComponent);
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

  it('should navigate to home if sign up is successful', () => {
    spyOn(component['userService'], 'signUp').and.returnValue(true);
    spyOn(component['router'], 'navigate');
    component.signUpForm.patchValue({
      email: 'test@test.com',
      name: 'test',
      password: 'password123',
      confirmPassword: 'password123',
    })
    component.onSubmit();
    expect(component['router'].navigate).toHaveBeenCalledWith(['/']);
  });

  it('should show snackbar if sign up is unsuccessful', () => {
    spyOn(component['userService'], 'signUp').and.returnValue(false);
    spyOn(component['snackBar'], 'open');
    component.signUpForm.patchValue({
      email: 'test@test.com',
      name: 'test',
      password: 'password123',
      confirmPassword: 'password123',
    })
    component.onSubmit();
    expect(component['snackBar'].open).toHaveBeenCalled();
  });

});
