import { Component, OnInit } from '@angular/core';
import {PostService} from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApi';

  // Get Data From API
  posts:any;
  constructor(private post:PostService){}

  ngOnInit(){
    this.post.getPosts().subscribe(response =>{
      this.posts = response;
      console.log(this.posts);
    })
  }

  getUserFormData(data:any){
    this.post.getSave(data).subscribe((result) =>{
      console.log(result);
    })
  }
}
