import { Component } from '@angular/core';
import { Priority, Task } from './task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskManager';

  constructor(private route:Router){}
  afficher(task:any) {
    console.log(task)
  }
  goToLink(id:string){
    console.log("click",id)
    this.route.navigate(['/angular','2']);

  }
}
