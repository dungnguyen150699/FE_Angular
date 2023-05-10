import { Byte } from '@angular/compiler/src/util';
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
  
  arrayBufferToBase64 = ( buffer: Byte[]|undefined ) : string => {
    if(buffer){
      let binary = '';
			let bytes = new Uint8Array( buffer );
			let len = bytes.byteLength;
			for (var i = 0; i < len; i++) {
				binary += String.fromCharCode( bytes[i] );
			}
      return window.btoa( binary );
    }
    return '';
  }

}
