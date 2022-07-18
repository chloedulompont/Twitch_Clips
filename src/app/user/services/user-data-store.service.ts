import { Injectable } from '@angular/core';
import {LocalstorageService} from "../../services/localstorage.service";

@Injectable({
  providedIn: 'root'
})
export class UserDataStoreService {
  private readonly USER_DATA_KEY = "AUTH_TOKEN";

  constructor(
    private localStorageService: LocalstorageService
  ) { }

  /**
   * Stores the user data JSON web token into the localStorage
   * @param token
   */
  public setUserDataToken(token: string): void{
    this.localStorageService.setItemInLocalStorage(this.USER_DATA_KEY, token, false);
  }

  /**
   * Retrieves the user data JSON web token from the localStorage
   */
  public getUserDataToken(): string{
    return this.localStorageService.getItemFromLocalStorage(this.USER_DATA_KEY);
  }

  /**
   * Removes the user data JSON web token from the localStorage
   */
  public removesUserDataToken(): void{
    return this.localStorageService.removeItemFromLocalStorage(this.USER_DATA_KEY);
  }
}
