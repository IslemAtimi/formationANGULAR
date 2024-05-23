import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/productModels';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[ProductsService]
})
export class ProductsComponent implements OnInit{
  products:Product[]=[]
  danger=false
  constructor(private service:ProductsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.service.products)
    var id=this.route.snapshot.paramMap.get('id')
    console.log(id)
  }

  add(){
    this.service.add()
  }

  afficher(){
    this.products=this.service.getProducts()
    if(this.products.length>3)this.danger=true
    this.service.afficher()
  }



}
