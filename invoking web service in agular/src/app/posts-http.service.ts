import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class PostsHttpService {

  constructor(public http: Http) { 
   
  }
 
  getHttpPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .map(res => res.json())
  }
}
