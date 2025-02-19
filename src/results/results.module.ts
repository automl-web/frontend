import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ResultsRoutingModule} from './results-routing.module';
import {ListComponent} from './list/list.component';
import {AddOrUpdateComponent} from './add-or-update/add-or-update.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatStepperModule} from "@angular/material/stepper";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
    declarations: [
        ListComponent,
        AddOrUpdateComponent
    ],
    imports: [
        CommonModule,
        ResultsRoutingModule,
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
export class ResultsModule {
}
