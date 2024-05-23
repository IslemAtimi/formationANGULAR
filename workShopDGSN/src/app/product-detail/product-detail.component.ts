import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  constructor(
    private service:ProductsService,
    private router:ActivatedRoute
  ){
    this.id=this.router.snapshot.paramMap.get("id")
  }
  product:any={}
  id:any
  ngOnInit(): void {
    console.log(this.id)
    this.service.getProductById(this.id??"").subscribe(value=>{
      this.product=value
      console.log(this.product)
    })
  }


}
