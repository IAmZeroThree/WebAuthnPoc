import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FingerprintjsProAngularModule } from '@fingerprintjs/fingerprintjs-pro-angular';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FingerprintjsProAngularModule.forRoot({
      loadOptions: {
        apiKey: "1QkW9UiSxzPkhezeh58R",
        region: "ap"
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
