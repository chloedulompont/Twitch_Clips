import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthenticationService} from "../services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _authService: AuthenticationService,
    private _route: Router
  ){}

  canActivate(): boolean {
    return this._authService.isLoggedIn();
  }

}
