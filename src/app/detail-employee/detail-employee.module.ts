import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailEmployeePageRoutingModule } from './detail-employee-routing.module';

import { DetailEmployeePage } from './detail-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailEmployeePageRoutingModule
  ],
  declarations: [DetailEmployeePage]
})
export class DetailEmployeePageModule {}
