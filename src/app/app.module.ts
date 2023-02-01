import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { LoginModule } from "./login/login.module";

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LoginModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
