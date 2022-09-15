// modules
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewOfficeComponent } from './add-new-office/add-new-office.component';
import { ManageOfficeComponent } from './manage-office/manage-office.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'add-office',
        component: AddNewOfficeComponent,
      },
      {
        path: 'manage-office',
        component: ManageOfficeComponent,
      },
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      { path: 'user', component: UserComponent },
      { path: 'manageEmployees', component: ManageEmployeesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
