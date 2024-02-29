import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskCreatorComponent } from './task-creator/task-creator.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { ImportantDirective } from './important.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskCreatorComponent,
    TasksListComponent,
    ImportantDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
