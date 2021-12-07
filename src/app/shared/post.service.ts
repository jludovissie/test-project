import { Injectable } from "@angular/core";

import { Observable, BehaviorSubject  } from "rxjs";
import { Post } from "./post.model";


@Injectable({
  providedIn:'root'
})



export class PostService{
private post:  Post[] = [
  {username: 'jludovissie', post:'I am cool'},
  {username: 'happyhannah', post:'I am happy'},
  {username:'niftynancy', post:'I am nifty'},
  {username:'bestiebri' , post: 'I am your bestie'}
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
}