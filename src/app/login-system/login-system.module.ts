import { SharedModuleModule } from './../shared-module/shared-module.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSystemRoutingModule } from './login-system-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginSystemRoutingModule, SharedModuleModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginSystemModule {}
