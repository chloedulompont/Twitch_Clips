import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from "./modal/modal.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [
    ModalComponent
  ],
  exports: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
