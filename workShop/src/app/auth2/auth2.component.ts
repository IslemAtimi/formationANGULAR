import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectServiceService } from '../connect-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth2',
  templateUrl: './auth2.component.html',
  styleUrls: ['./auth2.component.css']
})
export class Auth2Component implements OnInit {

  constructor(private route:Router,
    private fb:FormBuilder
    ,private service:ConnectServiceService) { }

  form:FormGroup=new FormGroup({})
  ngOnInit(): void {
   this.createFormulaire()
  }
objectSend:string="profile FULLSTACK"
  login(form:any){
    console.log(form)
    console.log(this.form.controls['email'].value)
    console.log(this.form.controls['password'].value)
    this.service.login(this.form.controls['email'].value,this.form.controls['password'].value)
    this.route.navigate(['/products'],{queryParams:{title:"ANGULAR",name:"AGB",profile:this.objectSend}})
  }

  createFormulaire(){
    this.form= this.fb.group({
      'email':['ecrire votre mail',Validators.email],
      'password':['ijljklj',Validators.required]
    })
  }

}
