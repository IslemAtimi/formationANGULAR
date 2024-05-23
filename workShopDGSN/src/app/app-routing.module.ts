import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SettingComponent } from './setting/setting.component';
import { LoginComponent } from './settingsPage/login/login.component';
import { LogoutComponent } from './settingsPage/logout/logout.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path:"",redirectTo:"acceuil",pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'acceuil',component:AccueilComponent,canActivate:[AuthGuardService]},
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)  },
  {path:"product-detail/:id",component:ProductDetailComponent},

  {path:'setting',component:SettingComponent
    ,children:[
      {path:'login',component:LoginComponent},
      {path:'logout',component:LogoutComponent}
    ]
  },
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
