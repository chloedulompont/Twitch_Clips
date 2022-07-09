import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { SharedModule } from "../shared/shared.module";
import {AuthenticationModule} from "../authentication/authentication.module";



@NgModule({
  declarations: [
    AuthModalComponent,

  ],
  exports: [
    AuthModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthenticationModule
  ]
})
export class UserModule { }
