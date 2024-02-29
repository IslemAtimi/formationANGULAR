import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { RouterModule, Routes } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const authRoutes:Routes = [
  {path:'login' , component: LoginComponent}
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    //FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
