import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {UserDataStoreService} from "./user-data-store.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private userDataStore: UserDataStoreService
  ) { }

  /**
   * Calls the database API to find and log a user
   * @param email
   * @param password
   */
  public loginWithEmailAndPassword(email: string, password: string): Observable<Object>{
    return this.http.post(`${environment.DB_API_URL}/users/login`, {
      email: email,
      password: password
    })
  }


  /**
   * Calls the database API to create a new user
   * @param username
   * @param email
   * @param password
   * @param age
   */
  public registerWithEmailAndPassword(username: string, email: string, password: string, age: number): Observable<Object>{
    return this.http.post(`${environment.DB_API_URL}/users/register`, {
      username: username,
      email: email,
      password: password,
      age: age
    })
  }

  /**
   * Verifies the user is logged in.
   */
  public isLoggedIn(): boolean{
    return !!this.userDataStore.getUserDataToken();
  }

  /**
   * Logs out the user by removing the JSON web token from the localStorage
   */
  public logout(): void{
    this.userDataStore.removesUserDataToken()
  }

}
