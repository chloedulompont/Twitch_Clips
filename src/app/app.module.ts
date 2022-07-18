import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { AppIntroComponent } from './app-intro/app-intro.component';
import { ClipArticleComponent } from './clip-article/clip-article.component';
import { SampleClipsComponent } from './sample-clips/sample-clips.component';
import { SharedModule } from "./shared/shared.module";
import { ModalService } from "./services/modal.service";
import { UserModule } from "./user/user.module";
import { ReactiveFormsModule } from "@angular/forms";
import { LocalstorageService } from "./services/localstorage.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {JwtInterceptorService} from "./user/interceptor/jwt-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AppIntroComponent,
    ClipArticleComponent,
    SampleClipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SharedModule,
    UserModule,
    ReactiveFormsModule
  ],
  providers: [
    ModalService,
    LocalstorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
