import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      hideFooter: true,
      cover: true,
      title: 'Login'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      hideFooter: true,
      cover: true,
      title: 'Register'
    }
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    data: {
      hideFooter: true,
      cover: true,
      title: 'Reset Password'
    }
  },
  {
    path: 'new-password',
    component: NewPasswordComponent,
    data: {
      hideFooter: true,
      cover: true,
      title: 'New Password'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
