import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";

import { Observable, BehaviorSubject, Subject  } from "rxjs";
import { Post } from "./post.model";


@Injectable({
  providedIn:'root'
})



export class PostService{


private post:  Post[] = [
  {username: 'jludovissie', post:'I am cool', likes: 0 },
  {username: 'happyhannah', post:'I am happy', likes: 0 },
  {username:'niftynancy', post:'I am nifty', likes: 0 },
  {username:'bestiebri' , post: 'I am your bestie', likes: 0 }
];

public post$: Observable<Post[]>
private postSub: BehaviorSubject<Post[]> = new BehaviorSubject(this.post)
constructor(){
  this.post$ = this.postSub.asObservable()
  

}
addPosts(newPost){
  this.post.push(newPost)
  this.postSub.next(this.post)
}
likePost(i){
this.post[i] = {...this.post[i], likes: this.post[i].likes + 1};
this.postSub.next(this.post);
console.log(this.post)
}
dislikePost(){

}

}