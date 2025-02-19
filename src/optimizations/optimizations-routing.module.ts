import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {AddOrUpdateComponent} from "./add-or-update/add-or-update.component";

const routes: Routes = [
  {
    path: "",
    component: ListComponent
  },
  {
    path: "add-or-update",
    component: AddOrUpdateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptimizationsRoutingModule { }
