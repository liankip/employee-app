import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddExperiencePageRoutingModule } from './add-experience-routing.module';

import { AddExperiencePage } from './add-experience.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    AddExperiencePageRoutingModule
  ],
  declarations: [AddExperiencePage]
})
export class AddExperiencePageModule {}
