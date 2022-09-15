// modules import
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// components import
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { AddNewOfficeComponent } from './add-new-office/add-new-office.component';
import { ManageOfficeComponent } from './manage-office/manage-office.component';
import { AddEmployeeComponent } from './add-new-office/add-employee/add-employee.component';

@NgModule({
  declarations: [
    HomeComponent,
    AddNewOfficeComponent,
    ManageOfficeComponent,
    AddEmployeeComponent,
    UserComponent,
    ManageEmployeesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModuleModule,
    SelectDropDownModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
  ],

  
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule {}
