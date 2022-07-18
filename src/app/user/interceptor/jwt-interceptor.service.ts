import { Injectable, Injector } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserDataStoreService} from "../services/user-data-store.service";

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{

  constructor(
    private _injector: Injector
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userDataStore = this._injector.get(UserDataStoreService);
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${userDataStore.getUserDataToken()}`
      }
    });
    return next.handle(tokenizedReq)
  }
}
