import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleoneRoutingModule } from './moduleone-routing.module';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    DeleteComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    ModuleoneRoutingModule
  ],
})
export class ModuleoneModule { }
