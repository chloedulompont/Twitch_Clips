import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  private readonly PROCESSING_MESSAGE: string = 'Processing your request...';
  private readonly ERROR_MESSAGE: string = 'An error has occurred, please try again later.';
  private readonly SUCCESS_MESSAGE: string = 'Successfully logged in!'

  public showAlert: boolean = false;
  public alertMsg: string = this.PROCESSING_MESSAGE;
  public alertColor: string = 'blue';

  public email = new FormControl<string>('', [Validators.required, Validators.email]);
  public password = new FormControl<string>('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)]);

  public loginForm = new FormGroup({
    email: this.email,
    password: this.password
  });

  constructor() {}

  ngOnInit(): void {
  }

  login(){
    this.showAlert = true;
    this.alertMsg = this.PROCESSING_MESSAGE;
    this.alertColor = "blue"

    window.setTimeout(() => {
      this.alertMsg = this.SUCCESS_MESSAGE;
      this.alertColor = 'green';

      window.setTimeout(() => {
        this.showAlert = false;
      }, 2000);
    }, 3000);
  }
}
