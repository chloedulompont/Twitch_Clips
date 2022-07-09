import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from "./modal/modal.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { InputComponent } from './input/input.component';
import { AlertComponent } from './alert/alert.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ModalComponent,
    InputComponent,
    AlertComponent
  ],
  exports: [
    ModalComponent,
    AlertComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
