import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list/list.component';
import {AddOrUpdateComponent} from './add-or-update/add-or-update.component';
import {AdditionalConfigurationComponent} from './additional-configuration/additional-configuration.component';

const routes: Routes = [
  {
    path: "",
    component: ListComponent
  },
  {
    path: "create",
    component: AddOrUpdateComponent
  },
  {
    path: "update/:id",
    component: AddOrUpdateComponent
  },
  {
    path: ":dataset_id/additional-configuration",
    component: AdditionalConfigurationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatasetsRoutingModule { }
