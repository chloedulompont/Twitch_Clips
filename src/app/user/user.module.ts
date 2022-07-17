import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { SharedModule } from "../shared/shared.module";
import {LoginFormComponent} from "./login-form/login-form.component";
import {RegisterFormComponent} from "./register-form/register-form.component";
import {UserDataStoreService} from "./services/user-data-store.service";
import {AuthenticationService} from "./services/authentication.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AuthModalComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  exports: [
    AuthModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserDataStoreService,
    AuthenticationService,
  ]
})
export class UserModule { }
