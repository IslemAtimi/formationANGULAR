import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'',redirectTo:'delete',pathMatch:'full'},
  { path: 'delete', component: DeleteComponent} ,
  { path: 'update', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleoneRoutingModule { }
