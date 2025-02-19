import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatasetsRoutingModule } from './datasets-routing.module';
import { ListComponent } from './list/list.component';
import { AddOrUpdateComponent } from './add-or-update/add-or-update.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { AdditionalConfigurationComponent } from './additional-configuration/additional-configuration.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    ListComponent,
    AddOrUpdateComponent,
    AdditionalConfigurationComponent
  ],
  imports: [
    CommonModule,
    DatasetsRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    MatSelectModule
  ]
})
export class DatasetsModule { }
