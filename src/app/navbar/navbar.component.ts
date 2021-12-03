import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: 'navbar.component.html', 
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
  
  }

}