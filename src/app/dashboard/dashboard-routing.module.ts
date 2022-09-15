// modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewOfficeComponent } from './add-new-office/add-new-office.component';

// components
import { HomeComponent } from './home/home.component';
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
