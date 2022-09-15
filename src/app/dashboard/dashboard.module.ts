import { SharedModuleModule } from './../shared-module/shared-module.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';


@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    ManageEmployeesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModuleModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
