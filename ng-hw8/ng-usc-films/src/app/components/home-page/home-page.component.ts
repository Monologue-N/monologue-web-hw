import {Component, OnInit, Output} from '@angular/core';
import { PostsService } from '../../services/posts.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public message = 'Passing the data!';
  @Output() public posts: any;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
     this.postsService.getAllPosts().subscribe(res => {
         this.posts = res;
    });
  }

}
