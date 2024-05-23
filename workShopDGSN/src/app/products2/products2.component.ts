import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products2',
  templateUrl: './products2.component.html',
  styleUrls: ['./products2.component.css'],
  providers:[ProductsService]
})
export class Products2Component {
  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    console.log(this.service.products)
  }

  add(){
    this.service.add()
  }

  afficher(){
    this.service.afficher()
  }
}
