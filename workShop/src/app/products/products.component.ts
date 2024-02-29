import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectServiceService } from '../connect-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:ConnectServiceService) { }

  ngOnInit(): void {
    const param1 = this.route.snapshot.queryParamMap.get('title');
    const param2 = this.route.snapshot.queryParamMap.get('name');
    const param3 = this.route.snapshot.queryParamMap.get('profile');
    console.log(param1,param2,param3)

    this.getData()
  }

  products:any
  getData(){
    this.products=this.service.getData().subscribe(data=>{
      this.products=data.products
      console.log(this.products)
    })
    
  }


}
