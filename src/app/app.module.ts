import { LoginSystemModule } from './login-system/login-system.module';
import { LoginComponent } from './login-system/login/login.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModuleModule } from './shared-module/shared-module.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginSystemModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
