import { Component } from '@angular/core';
import { InjectionService } from '../services/injection.service';

@Component({
  selector: 'app-instance1',
  templateUrl: './instance1.component.html',
  styleUrls: ['./instance1.component.css'],
  providers:[InjectionService]
})
export class Instance1Component {
  constructor(private service:InjectionService){

  }
  add(){
    this.service.add()
  }
  afficher(){
    this.service.afficher()
  }
}
