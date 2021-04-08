import {Component, OnInit, Output} from '@angular/core';
import { PostsService } from '../../services/posts.service';
import {Observable} from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  items = Array.from({length: 1000}, (v, k) => k + 1);
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
    if (this.storage) {
      if (this.storage.continue_watching) {
        this.json = JSON.parse(this.storage.continue_watching);
        for (const one of this.json) {
          this.array.push(JSON.parse(one));
        }
        console.log('[parseContinueWatching] ' + this.array[0].title);
        console.log('[parseContinueWatching] ' + this.array[0].poster_path);
        console.log(this.array);
      }
    }

  }

}
