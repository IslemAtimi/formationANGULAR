import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImportantDirective } from './important.directive';
import { MockTaskService } from './mock-task.service';
import { TaskCreatorComponent } from './task-creator/task-creator.component';
import { TaskService } from './task.service';
import { TasksListComponent } from './tasks-list/tasks-list.component';

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
  providers: [
    {provide: TaskService, useClass: MockTaskService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
