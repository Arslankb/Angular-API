import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // Get Data From API
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  // Get Data From API

  getPosts(){
    return this.http.get(this.url);
  } 


  // Post Data in API

  getSave(data:any ){
    return this.http.post(this.url, data)
  }
}
