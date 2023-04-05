import { Component, Input, OnInit } from '@angular/core';
import { CategoryDTO } from '../../model/CategoryDTO';
import { NavModulService } from '../nav-modul.service';

@Component({
  selector: 'app-node-child',
  templateUrl: './node-child.component.html',
  styleUrls: ['./node-child.component.css']
})
export class NodeChildComponent implements OnInit {
  @Input() category:CategoryDTO = new CategoryDTO();
  @Input() categorys:CategoryDTO[] = new Array();

  constructor(public navModulService:NavModulService) {

  }

  ngOnInit(): void {
  }

}
