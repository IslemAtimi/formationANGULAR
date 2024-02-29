import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    const param1 = this.route.snapshot.queryParamMap.get('name');
    const param2 = this.route.snapshot.queryParamMap.get('profile');
    console.log(param1,param2)

  }

}
