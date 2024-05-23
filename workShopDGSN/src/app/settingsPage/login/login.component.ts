import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private fb:FormBuilder) {
      }
  

    formLogin:FormGroup=this.fb.group({

      email:['islem@itcomp.com',Validators.required],
      password:['********']
    }) 
  ngOnInit(){
   

  }
login(){
     console.log(this.formLogin.value) 
    }


}
