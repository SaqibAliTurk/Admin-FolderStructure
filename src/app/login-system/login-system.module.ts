import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSystemRoutingModule } from './login-system-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginSystemRoutingModule],
})
export class LoginSystemModule {}
