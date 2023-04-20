import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from './homeService';
import { BookDTO } from '../model/BookDTO';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: BookDTO[] = new Array();

  constructor(private route:ActivatedRoute,private homeService:HomeService) { 
  }

  getRequestParam = () =>{

  }
  
  ngOnInit(): void {
    const subscribe:Subscription = this.homeService.searchAllProduct().subscribe({
      next : (res: any) =>{
        this.items.push(...res.items);
        console.log("Product: ",res)
      }
    });
    if(this.items.length>0) subscribe.unsubscribe();
    
  }

}
