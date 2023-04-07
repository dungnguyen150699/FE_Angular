import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../services/common_service/homeService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:ActivatedRoute,private homeService:HomeService) { 
  }

  getRequestParam = () =>{

  }
  
  ngOnInit(): void {
    this.homeService.searchAllProduct().subscribe({
      next : (res: any) =>{
        
      }
    }
    )
  }

}
