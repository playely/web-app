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
      title: 'login'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      hideFooter: true,
      cover: true,
      title: 'register'
    }
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    data: {
      hideFooter: true,
      cover: true,
      title: 'resetPassword'
    }
  },
  {
    path: 'new-password',
    component: NewPasswordComponent,
    data: {
      hideFooter: true,
      cover: true,
      title: 'newPassword'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
