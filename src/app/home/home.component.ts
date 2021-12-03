import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isShown = false;
  posts: []
  constructor() { }

  ngOnInit() {}
 createPost(){
    this.isShown = ! this.isShown;
 }
}