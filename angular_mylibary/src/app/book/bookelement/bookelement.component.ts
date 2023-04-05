import { Component, Input, OnInit } from '@angular/core';
import { BookDTO } from 'src/app/model/BookDTO';

@Component({
  selector: 'app-bookelement',
  templateUrl: './bookelement.component.html',
  styleUrls: ['./bookelement.component.css']
})
export class BookelementComponent implements OnInit {
  @Input() book:BookDTO = new BookDTO();

  constructor() { }

  ngOnInit(): void {
  }

  detailBook = () =>{
    
  } 

}
