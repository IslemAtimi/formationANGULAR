import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FakeDataService } from '../fake-data.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  formulaire:FormGroup=new FormGroup({})
  constructor(private fb:FormBuilder,private service:FakeDataService) { }

  ngOnInit(): void {
    this.createForm()
    this.service.getData().subscribe(data=>console.log(data))
  }
  createForm(){
this.formulaire=this.fb.group({
  'first':['',Validators.required],
  'last':['islem'],
  'email':['islem@com'],
  'password':['']
})

  }

  login(){
    console.log(this.formulaire.controls['first'])
  }

}
