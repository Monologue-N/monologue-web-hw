import {Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  private routeSub: Subscription | undefined;
  public id = '';
  public mediaType = '';
  public key = '';
  public movieDetails: any;
  public movieVideos: any;
  public releaseYear: number | undefined;
  public voteAverage: any;
  public hours: any;
  public minutes: any;
  public genres: any = [];
  public spokenLanguages: any = [];
  public overview: any;
  public tweet: any;
  public cast: any;
  public reviews: any;
  myStorage = window.localStorage;
  addToWatchListBtn = document.getElementById('watchlist-btn');

  constructor(private route: ActivatedRoute, private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      console.log(params.id);
      this.id = params.id;
    });
    this.fetchData();
    // @ts-ignore
    // window.onload = this.onLoadListen();
    console.log('ngOnInit');
  }
  //
  // onLoadListen() {
  //   // @ts-ignore
  //   document.addEventListener('DOMContentLoaded', this.addToWatchListBtn.addEventListener('click', sum, false));
  // }

  fetchData() {
    this.postsService.getMovieDetails(this.id).subscribe(res => {
      this.movieDetails = res;
      // tslint:disable-next-line:radix
      this.releaseYear = parseInt(this.movieDetails.release_date);
      this.voteAverage = parseFloat(this.movieDetails.vote_average).toFixed(1);
      // tslint:disable-next-line:radix
      this.hours = Math.floor(this.movieDetails.runtime / 60);
      this.minutes = this.movieDetails.runtime - this.hours * 60;
      for (const genre of this.movieDetails.genres) {
        this.genres.push(genre.name);
      }
      this.genres = this.genres.join(', ');
      for (const language of this.movieDetails.spoken_languages) {
        this.spokenLanguages.push(language.english_name);
      }
      this.spokenLanguages.join(', ');
      this.overview = this.movieDetails.overview;
      this.tweet = 'Watch%20' + this.movieDetails.toString() + 'https://www.youtube.com/watch?v=' + this.key.toString() + '#USC%20#CSCI571%20#FightOn';
    });
    this.postsService.getMovieVideos(this.id).subscribe(res => {
      this.movieVideos = res;
      if (this.movieVideos.results.length === 0 || !this.movieVideos.results.length) {
        this.key = 'tzkWB85ULJY';
      } else {
        this.key = this.movieVideos.results[0].key;
        if (!this.key) {
          this.key = 'tzkWB85ULJY';
        }
      }
    });
    this.postsService.getMovieCast(this.id).subscribe(res => {
        this.cast = res;
        this.cast = this.cast.cast;
    });
    this.postsService.getMovieReviews(this.id).subscribe(res => {
        this.reviews = res;
        this.reviews = this.reviews.results;
        // deal with reviews data
        for (const review of this.reviews) {
          // format avatar path
          if (!review.author_details.avatar_path) {
            review.avatar_path = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU';
          } else {
            if (review.author_details.avatar_path.substring(0, 6) === '/https') {
               review.avatar_path = review.author_details.avatar_path.substring(1);
            } else {
              review.avatar_path = 'https://image.tmdb.org/t/p/original' + review.author_details.avatar_path;
            }
          }
          // format date created
          const date = review.created_at.match(/\d+/g);
          review.created_at = + date[1] + '/' + date[2] + '/' + date[0];

        }
    });
  }

  ngOnDestroy() {
    // @ts-ignore
    this.routeSub.unsubscribe();
  }

  createBtn() {
    const addToWatchListBtn = document.createElement('button');
    const watchListContainer = document.getElementById('watchlist-btn-container');
    addToWatchListBtn.id = 'watchlist-btn';
    addToWatchListBtn.className = 'btn btn-primary row';
    addToWatchListBtn.innerHTML = 'Add to watchlist';
    // @ts-ignore
    if (watchListContainer) {
      watchListContainer.appendChild(addToWatchListBtn);
    }
  }

  // listenBtn() {
  //   const addToWatchListBtn = document.getElementById('watchlist-btn');
  //   console.log(addToWatchListBtn);
  //   // @ts-ignore
  //   if (addToWatchListBtn) {
  //     addToWatchListBtn.addEventListener('click', this.sum.bind(this), false);
  //     console.log('listenBtn');
  //   }
  // }
  //
  // toggle() {
  //   const addToWatchListBtn = document.getElementById('watchlist-btn');
  //   // @ts-ignore
  //   if (addToWatchListBtn.innerHTML === 'Add to watchlist') {
  //     // @ts-ignore
  //     addToWatchListBtn();
  //   } else {
  //     // @ts-ignore
  //     removeEventListener();
  //   }
  // }
  //
  // addToWatchList() {
  //   this.myStorage.setItem(this.movieDetails.id, this.movieDetails.id);
  //   const addToWatchListBtn = document.getElementById('watchlist-btn');
  //   // @ts-ignore
  //   addToWatchListBtn.innerHTML = 'Remove from watchlist';
  // }
  //
  // removeFromWatchList() {
  //   this.myStorage.removeItem(this.movieDetails.id);
  //   const addToWatchListBtn = document.getElementById('watchlist-btn');
  //   // @ts-ignore
  //   addToWatchListBtn.innerHTML = 'Add to watchlist';
  // }
  //
  // sum() {
  //   console.log('one click');
  // }

}
