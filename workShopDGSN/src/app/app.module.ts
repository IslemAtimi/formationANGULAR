import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { ImageTransformDirective } from './services/image-transform.directive';
import { ChacherTextDirective } from './services/chacher-text.directive';
import { Instance1Component } from './instance1/instance1.component';
import { Instance2Component } from './instance2/instance2.component';
import { ProductsService } from './services/products.service';
import { ProductsComponent } from './products/products.component';
import { Products2Component } from './products2/products2.component';
import { UnderlineDirective } from './services/underline.directive';
import { SettingComponent } from './setting/setting.component';
import { LoginComponent } from './settingsPage/login/login.component';
import { LogoutComponent } from './settingsPage/logout/logout.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AccueilComponent } from './accueil/accueil.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ImageTransformDirective,
    ChacherTextDirective,
    Instance1Component,
    Instance2Component,
    ProductsComponent,
    Products2Component,
    UnderlineDirective,
    SettingComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    NotFoundComponent,
    AccueilComponent,
    ProductDetailComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
