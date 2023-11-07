import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StartComponent} from './start/start.component';
import {InfoComponent} from './info/info.component';
import {ContactComponent} from './contact/contact.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {PrivacyComponent} from './privacy/privacy.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {ThirdComponent} from './third/third.component';
import {
  RECAPTCHA_SETTINGS, RECAPTCHA_V3_SITE_KEY,
  RecaptchaFormsModule,
  RecaptchaModule,
  RecaptchaSettings,
  RecaptchaV3Module
} from "ng-recaptcha";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    StartComponent,
    InfoComponent,
    ContactComponent,
    ImpressumComponent,
    PrivacyComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    RecaptchaV3Module
  ],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptcha.siteKey,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
