import { Component } from '@angular/core';
import { PostsService } from './posts.service';
import { PostsHttpService } from './posts-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  posts: any[];
  newPosts :any[];
  constructor(public postsService: PostsService,public postsHttpSerive:PostsHttpService) {
    this.posts = this.postsService.getPosts();

    this.postsHttpSerive.getHttpPosts()
    .subscribe(res => {        
      this.newPosts = res;       
    }) 
  }
}
