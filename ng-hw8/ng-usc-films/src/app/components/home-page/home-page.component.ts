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
  public popularMovies: any;
  public topRatedMovies: any;
  public trendingMovies: any;
  public popularTvShows: any;
  public topRatedTvShows: any;
  public trendingTvShows: any;
  storage = window.localStorage;
  public json: any;
  public array: any = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.parseContinueWatching();
    this.fetchData();
  }

  fetchData() {
     this.postsService.getAllPosts().subscribe(res => {
         this.posts = res;
    });
     this.postsService.getPopularMovies().subscribe(res => {
         this.popularMovies = res;
     });
     this.postsService.getTopRatedMovies().subscribe(res => {
      this.topRatedMovies = res;
    });
     this.postsService.getTrendingMovies().subscribe(res => {
      this.trendingMovies = res;
    });
     this.postsService.getPopularTvShows().subscribe(res => {
      this.popularTvShows = res;
    });
     this.postsService.getTopRatedTvShows().subscribe(res => {
      this.topRatedTvShows = res;
    });
     this.postsService.getTrendingTvShows().subscribe(res => {
      this.trendingTvShows = res;
    });
  }

  parseContinueWatching() {
    console.log('parseContinueWatching' + this.storage);
    // if (this.storage) {
    //   for (let k = 0; k < this.storage.length; k++) {
    //     const key = this.storage.key(k);
    //     if (key !== null) {
    //       const value = this.storage.getItem(key);
    //       // @ts-ignore
    //       this.json = JSON.parse(value);
    //       console.log('this json is ' + this.json);
    //       console.log('continue watching is: ' + this.json.continue_watching);
    //       if (this.json.continue_watching === 'true') {
    //         // @ts-ignore
    //         this.array.push(this.json);
    //       }
    //     }
    //   }
    //   console.log(this.array);
    // }
    if (this.storage) {
      if (this.storage.continue_watching) {
        this.array = JSON.parse(this.storage.continue_watching);
        console.log(this.array);
      }
    }

  }

}
