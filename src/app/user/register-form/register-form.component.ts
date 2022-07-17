import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PasswordMatchValidator} from "../validators/password-match-validator";
import {AuthenticationService} from "../services/authentication.service";
import Error from "../../models/error";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  private readonly PROCESSING_SIGNIN: string = "Please wait! We're registering your account.";
  private readonly SUCCESSFUL_MESSAGE: string = "You are successfully registered!";
  private readonly ERROR_MESSAGE: string = "An error has occured, please try again later.";

  public alertMsg: string = this.PROCESSING_SIGNIN;
  public alertColor: string = 'blue';
  public showAlert: boolean = false;

  public username = new FormControl('', {
    validators: [Validators.required, Validators.minLength(3), Validators.maxLength(15)],
    nonNullable: true
  });
  public email = new FormControl('', {
    validators: [Validators.required, Validators.email],
    nonNullable: true
  });
  public age = new FormControl(0, {
    validators: [Validators.min(18), Validators.max(99)],
    nonNullable: true
  });
  public password = new FormControl('', {
    validators: [Validators.required],
    nonNullable: true
  });
  public confirmPassword = new FormControl('', {
    validators: [Validators.required],
    nonNullable: true
  });

  public registerForm = new FormGroup({
    username: this.username,
    email: this.email,
    age: this.age,
    password: this.password,
    confirmPassword: this.confirmPassword
  }, [PasswordMatchValidator.match('password', 'confirmPassword')]);

  constructor(
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
  }


  public register(){
    this.alertMsg = this.PROCESSING_SIGNIN;
    this.alertColor = 'blue';
    this.showAlert = true;

    const observer = {
      next: (result: Object) => {
        console.log(result);
        this.alertMsg = this.SUCCESSFUL_MESSAGE;
        this.alertColor = 'green';
      },
      error: (error: Error) => {
        this.alertMsg = this.ERROR_MESSAGE;
        this.alertColor = 'red';
      },
      complete: () => {
        window.setTimeout(() => this.showAlert = false, 1500);
      }
    }

    this.authService.registerWithEmailAndPassword(
      this.username.value,
      this.email.value,
      this.password.value,
      this.age.value
    ).subscribe(observer)

  }
}
