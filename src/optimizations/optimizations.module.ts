import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptimizationsRoutingModule } from './optimizations-routing.module';
import { AddOrUpdateComponent } from './add-or-update/add-or-update.component';
import { ListComponent } from './list/list.component';
import {MatAnchor, MatButtonModule, MatIconButton} from "@angular/material/button";
import {
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow, MatRowDef, MatTable, MatTableModule
} from "@angular/material/table";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatStepperModule} from "@angular/material/stepper";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    AddOrUpdateComponent,
    ListComponent
  ],
    imports: [
        CommonModule,
        OptimizationsRoutingModule,
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
        MatSelectModule,
    ]
})
export class OptimizationsModule { }
