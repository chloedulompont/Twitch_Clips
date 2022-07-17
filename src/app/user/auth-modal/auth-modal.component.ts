import { Component, OnInit, OnDestroy } from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent implements OnInit, OnDestroy {
  public modalId: string = 'authenticationModal';

  public readonly LOGIN_FORM_NAME: string = 'loginForm';
  public readonly SIGN_IN_FORM_NAME: string = 'registerForm';
  public selectedForm: string = this.LOGIN_FORM_NAME;

  constructor(
    public modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.modalService.register(this.modalId);
  }

  ngOnDestroy() {
    this.modalService.unregister(this.modalId);
  }

  public isSelected(formName: string): boolean{
    return this.selectedForm === formName;
  }

  public selectForm(formName: string): void{
    this.selectedForm = formName;
  }
}
