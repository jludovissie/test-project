import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post.model';
import { PostService } from '../shared/post.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isShown = false;
  posts : Observable<Post[]>
  numberLikes = 0;
 
 


  constructor(private post: PostService) {
    this.posts = post.post$.pipe(tap(data => {
      console.log('working')
    } ))
   }

  ngOnInit() {}

  createPost(){
    this.isShown = ! this.isShown;
 }
 onSubmit(newPost){
   this.post.addPosts(newPost.value)
 }
 
}