import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImportantDirective } from './important.directive';
import { MockTaskService } from './mock-task.service';
import { TaskCreatorComponent } from './task-creator/task-creator.component';
import { TaskService } from './task.service';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { PriorityPipe } from './priority.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", redirectTo: "tasks", pathMatch: "full"},
  {path: "tasks", component: TasksListComponent},
  {path: "new-task", component: TaskCreatorComponent},
  {path: "**", redirectTo: "tasks"},
]

@NgModule({
  declarations: [
    AppComponent,
    TaskCreatorComponent,
    TasksListComponent,
    ImportantDirective,
    PriorityPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: TaskService, useClass: MockTaskService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
