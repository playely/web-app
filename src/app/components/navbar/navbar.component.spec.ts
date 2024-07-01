import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { NavigationStart, Router, provideRouter } from '@angular/router';
import { UserService } from '../../services/user.service';
import { RouterTestingHarness } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [ provideRouter([]), UserService ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    component.isMenuOpen = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    spyOn(component['toggleMenu'], 'emit').and.callThrough();
    expect(component).toBeTruthy();
    expect(component['toggleMenu'].emit).not.toHaveBeenCalled();
  });

  it('should close all the subscribers', () => {
    spyOn(component['destroyed$'], 'next').and.callThrough();
    component.ngOnDestroy();
    expect(component['destroyed$'].next).toHaveBeenCalled();
  });

  it('should logout the user', () => {
    spyOn(component['userService'], 'logout').and.callThrough();
    spyOn(component['router'], 'navigate').and.callThrough();
    component.logout();
    expect(component['userService'].logout).toHaveBeenCalled();
    expect(component['router'].navigate).toHaveBeenCalledWith(['']);
  });
});
