import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  private readonly PROCESSING_MESSAGE: string = 'Processing your request...';
  private readonly ERROR_MESSAGE: string = 'An error has occurred, please try again later.';
  private readonly SUCCESS_MESSAGE: string = 'Successfully logged in!';

  private readonly PASSWORD_PATTERN: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

  public showAlert: boolean = false;
  public alertMsg: string = this.PROCESSING_MESSAGE;
  public alertColor: string = 'blue';

  public email = new FormControl<string>('', {
    validators: [Validators.required, Validators.email],
    nonNullable: true
});
  public password = new FormControl<string>('', {
    validators: [Validators.required, Validators.pattern(this.PASSWORD_PATTERN)],
    nonNullable: true
});

  public loginForm = new FormGroup({
    email: this.email,
    password: this.password
  });

  constructor(
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
  }

  login(){
    this.showAlert = true;
    this.alertMsg = this.PROCESSING_MESSAGE;
    this.alertColor = "blue"

    const observer = {
      next: (jwt: Object) => {
        this.alertMsg = this.SUCCESS_MESSAGE;
        this.alertColor = 'green';


      },
      error: (error: Error) => {
        this.alertMsg = this.ERROR_MESSAGE;
        this.alertColor = 'red';
      }
    }

    this.authService.loginWithEmailAndPassword(this.email.value, this.password.value).subscribe(observer)

  }
}
