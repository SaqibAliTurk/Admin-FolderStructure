// modules import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// components import
import { HomeComponent } from './home/home.component';
import { AddNewOfficeComponent } from './add-new-office/add-new-office.component';
import { ManageOfficeComponent } from './manage-office/manage-office.component';
import { AddEmployeeComponent } from './add-new-office/add-employee/add-employee.component';

@NgModule({
  declarations: [
    HomeComponent,
    AddNewOfficeComponent,
    ManageOfficeComponent,
    AddEmployeeComponent,
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
})
export class DashboardModule {}
