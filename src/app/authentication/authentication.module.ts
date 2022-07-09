import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from './login-form/login-form.component';
import {SigninFormComponent} from './signin-form/signin-form.component';
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoginFormComponent,
    SigninFormComponent
  ],
  exports: [
    LoginFormComponent,
    SigninFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule {
}
