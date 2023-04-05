import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  isCollapsed = false;
  now : Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }
    
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
