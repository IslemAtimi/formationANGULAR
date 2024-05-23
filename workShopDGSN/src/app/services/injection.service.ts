import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InjectionService {

  constructor() { }

  tasks:number[]=[]

  add(){
    this.tasks.push(1)
  }
  afficher(){
    console.log(this.tasks)
  }
}
