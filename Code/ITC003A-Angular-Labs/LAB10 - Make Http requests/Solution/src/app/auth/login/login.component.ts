import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginModel } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login : LoginModel = {
    email: "",
    password: ""
  }

  loginForm?: FormGroup 

  constructor(private formBuilder: FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
    this.initForm()
  }

  private initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  getError(control:string, validator: string) {
    return this.loginForm?.controls[control].errors?.[validator];
  }

  onSubmit() {
    console.log(this.loginForm?.value)
    let {email, password} = this.loginForm?.value
    this.authService.login(email,password)
  }
}
