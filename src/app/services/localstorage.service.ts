import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  /**
   * Retrieves the data from the localstorage
   * @param key
   * @param isJsonData
   */
  public getItemFromLocalStorage(key: string, isJsonData: boolean = true): any{
    const data = localStorage.getItem(key);

    if(data){
      if(isJsonData){
        return JSON.parse(data);
      }
      return data;
    }
  }


  /**
   * Saves the data in the localstorage
   * @param key
   * @param value
   * @param isJsonData
   */
  public setItemInLocalStorage(key: string, value: any, isJsonData: boolean = true): void{
    if(isJsonData){
      localStorage.setItem(key, JSON.stringify(value));
    }
    else{
      localStorage.setItem(key, value)
    }
  }

  /**
   * Removes data from the localstorage
   * @param key
   */
  public removeItemFromLocalStorage(key: string): void{
    localStorage.removeItem(key);
  }

  /**
   * Clears the localstorage
   */
  public clearLocalStorage(): void{
    localStorage.clear();
  }
}
