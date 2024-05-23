import { Component, OnInit } from '@angular/core';
import { Product } from '../models/productModels';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private service:ProductsService){}

  products:any=[]

  loading=true


  ngOnInit(): void {
    this.service.getProductsFromApi().subscribe(value=>{
      this.loading=false
      this.products=value.products
    })
  }



}
