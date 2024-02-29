import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  titles=["Home","About us","Contact us"]
  ngOnInit(): void {
  }

  // first:string="first"
  // last:string="second"
  // email:string="third"
  // pass:string="pass"
  // pass_confirm:string="pass"


  login(form:any){
    console.log("login")
    console.log(form)
  }

}
