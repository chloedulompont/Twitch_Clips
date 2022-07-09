import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmailMatchValidator} from "../validators/email-match-validator";

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {
  private readonly PROCESSING_SIGNIN: string = "Please wait! We're registering your account.";
  private readonly SUCCESSFUL_MESSAGE: string = "You are successfully registered!";
  private readonly ERROR_MESSAGE: string = "An error has occured, please try again later.";

  public alertMsg: string = this.PROCESSING_SIGNIN;
  public alertColor: string = 'blue';
  public showAlert: boolean = false;

  public username = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
  public email = new FormControl('', [Validators.required, Validators.email]);
  public age = new FormControl('', [Validators.min(18), Validators.max(99)]);
  public password = new FormControl('', [Validators.required]);
  public confirmPassword = new FormControl('', [Validators.required]);

  public signInForm = new FormGroup({
    username: this.username,
    email: this.email,
    age: this.age,
    password: this.password,
    confirmPassword: this.confirmPassword
  }, [EmailMatchValidator.match('password', 'confirmPassword')]);

  constructor() { }

  ngOnInit(): void {
  }

  register(){
    this.alertMsg = this.PROCESSING_SIGNIN;
    this.alertColor = 'blue';
    this.showAlert = true;

    window.setTimeout(() => {
      this.alertMsg = this.SUCCESSFUL_MESSAGE;
      this.alertColor = 'green';

      window.setTimeout(() => {
        this.showAlert = false;
      }, 2000);
    }, 3000);
  }
}
