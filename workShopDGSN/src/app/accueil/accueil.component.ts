import { Component, OnInit } from '@angular/core';
import { Products2Service } from '../services/products2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit{

  productsList:any=[]
    constructor(private service:Products2Service,private route:Router){}

  ngOnInit(): void {
    this.service.getProducts().subscribe(result=>{
      this.productsList=result.products
      console.log(result)
    })
  }
  gotoProduct(id:number){
    console.log("click")
    this.service.getProductById(id+'').subscribe(result=>{
      this.route.navigate(['/product-detail',id])
    })
  }



}
