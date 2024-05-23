import { Component } from '@angular/core';
import { InjectionService } from '../services/injection.service';

@Component({
  selector: 'app-instance2',
  templateUrl: './instance2.component.html',
  styleUrls: ['./instance2.component.css'],
  providers:[InjectionService]
})
export class Instance2Component {

  constructor(private service:InjectionService){

  }
  add(){
    this.service.add()
  }
  afficher(){
    this.service.afficher()
  }
}
