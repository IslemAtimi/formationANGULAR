import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { TaskCreatorComponent } from './task-creator/task-creator.component';
import { AuthGuardLService } from './auth-guard-l.service';
import { AuthComponent } from './auth/auth.component';
import { Auth2Component } from './auth2/auth2.component';
import { ProductsComponent } from './products/products.component';
import { PhaseTowGuardService } from './phase-tow-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'login',component:Auth2Component},
  {path:'products',canActivate: [PhaseTowGuardService], component:ProductsComponent},
  { path: 'first', component: FirstComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'task-creator',canActivate: [AuthGuardLService], component: TaskCreatorComponent },
  {path: 'moduleone', loadChildren: () => import('./moduleone/moduleone.module').then(m => m.ModuleoneModule)},
  {path:'**',redirectTo:'first',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
