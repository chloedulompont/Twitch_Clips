import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  public loginWithEmailAndPassword(email: string, password: string): Observable<Object>{
    return this.http.post(`${environment.DB_API_URL}/users/login`, {
      email: email,
      password: password
    })
  }


  public registerWithEmailAndPassword(username: string, email: string, password: string, age: number): Observable<Object>{
    return this.http.post(`${environment.DB_API_URL}/users/register`, {
      username: username,
      email: email,
      password: password,
      age: age
    })
  }


}
