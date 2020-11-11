import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailEmployeePage } from './detail-employee.page';

const routes: Routes = [
  {
    path: '',
    component: DetailEmployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailEmployeePageRoutingModule {}
