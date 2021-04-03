import {Component, OnInit, OnDestroy, ElementRef} from '@angular/core';
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
  public title = '';
  // tslint:disable-next-line:variable-name
  public poster_path = '';
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
  public recommendedMovies: any;
  public similarMovies: any;
  public castDetails: any;
  public watchlistFlag: any;
  myStorage = window.localStorage;

  constructor(private route: ActivatedRoute, private postsService: PostsService, private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      console.log(params.id);
      this.id = params.id;
    });
    this.fetchData();
    // @ts-ignore
    // this.addToContinueWatching();
  }

  fetchData() {
    this.postsService.getMovieDetails(this.id).subscribe(res => {
      this.movieDetails = res;
      this.title = this.movieDetails.title;
      this.poster_path = this.movieDetails.poster_path;
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
      // add to continue watching
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
        const tmpReviews = [];
        for (let i = 0; i < 10; i++) {
          tmpReviews.push(this.reviews[i]);
        }
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
          const date = review.created_at;
          console.log(date);
          // tslint:disable-next-line:radix
          const newDate = new Date(date);
          console.log(newDate);
          const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(newDate);
          const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate);
          // const ho = new Intl.DateTimeFormat('en', { hour: 'numeric' }).format(newDate);
          const min = new Intl.DateTimeFormat('en', { minute: 'numeric' }).format(newDate);

          if (newDate.getHours() > 12) {
            review.created_at = `${mo} ${da}, ${newDate.getFullYear()}, ${newDate.getHours()}:${min}:${newDate.getSeconds()} PM`;
          } else {
            review.created_at = `${mo} ${da}, ${newDate.getFullYear()}, ${newDate.getHours()}:${min}:${newDate.getSeconds()} AM`;
          }
        }
    });
    // fetch recommended movies data
    this.postsService.getRecommendedMovies(this.id).subscribe(res => {
        this.recommendedMovies = res;
    });
    // fetch similar movies data
    this.postsService.getSimilarMovies(this.id).subscribe(res => {
      this.similarMovies = res;
    });
  }

  // tslint:disable-next-line:variable-name
  addToContinueWatching() {
    // tslint:disable-next-line:max-line-length
    if (!this.myStorage.getItem(this.id)) {
      console.log('addToContinueWatching' + this.title);
      const str = `{"id": ${this.id}, "title": \"${this.title}\", "poster_path": \"${this.poster_path}\", "continue_watching": "true", "watchlist": "false"}`;
      this.myStorage.setItem(this.id, str);
    }
    console.log(window.localStorage);
  }


  getCastDetails(person: string) {
    // this.elementRef.nativeElement.ownerDocument.body.style.position = 'fixed';

    this.postsService.getCastDetails(person).subscribe(res => {
      this.castDetails = res;
    });
    if (document.getElementById('card')) {
      // @ts-ignore
      document.getElementById('card').style.display = 'block';
    }
  }

  ngOnDestroy() {
    // @ts-ignore
    this.routeSub.unsubscribe();
  }

  toggle() {
    const addToWatchListBtn = document.getElementById('watchlist-btn');
    // @ts-ignore
    if (this.myStorage.getItem(this.id).watchlist !== 'true') {
    // if (this.myStorage.getItem(this.id).watchlist !== 'true') {
      // @ts-ignore
      this.addToWatchList();
      console.log(' this.addToWatchList();');
    } else {
      // @ts-ignore
      this.removeFromWatchList();
      console.log(' this.removeFromWatchList();\n');
    }
  }

  addToWatchList() {
    this.myStorage.setItem(this.movieDetails.id, this.movieDetails.id);
    const addToWatchListBtn = document.getElementById('watchlist-btn');
    const addedAlert = document.getElementById('add-alert');
    const removeAlert = document.getElementById('remove-alert');
    // @ts-ignore
    addToWatchListBtn.innerHTML = 'Remove from watchlist';
    // add to local storage
    // tslint:disable-next-line:max-line-length
    // const str = `{"id":` + `\"` + this.id.toString() + `\","title":\"` + this.title.toString() + `\","poster_path":\"` + this.poster_path.toString() + `\"}`;
    this.myStorage.removeItem(this.id);
    const str = `{"id": ${this.id}, "title": \"${this.title}\", "poster_path": \"${this.poster_path}\", "continue_watching": "true", "watchlist": "true"}`;
    this.myStorage.setItem(this.id, str);
    console.log(window.localStorage);
    // @ts-ignore
    removeAlert.style.display = 'none';
    // @ts-ignore
    addedAlert.style.display = 'block';
    setTimeout(() => {
      // @ts-ignore
      addedAlert.style.display = 'none';
    }, 5000);
  }

  removeFromWatchList() {
    this.myStorage.removeItem(this.movieDetails.id);
    const addToWatchListBtn = document.getElementById('watchlist-btn');
    const addedAlert = document.getElementById('add-alert');
    const removeAlert = document.getElementById('remove-alert');
    // @ts-ignore
    addToWatchListBtn.innerHTML = 'Add to watchlist';
    // remove from local storage
    this.myStorage.removeItem(this.id);
    const str = `{"id": ${this.id}, "title": \"${this.title}\", "poster_path": \"${this.poster_path}\", "continue_watching": "true", "watchlist": "false"}`;
    this.myStorage.setItem(this.id, str);

    // console.log(window.localStorage);
    // @ts-ignore
    addedAlert.style.display = 'none';
    // @ts-ignore
    removeAlert.style.display = 'block';
    setTimeout(() => {
      // @ts-ignore
      removeAlert.style.display = 'none';
    }, 5000);
  }

  hideAddedAlert() {
    const addedAlert = document.getElementById('add-alert');
    // @ts-ignore
    addedAlert.style.display = 'none';
  }
  hideRemovedAlert() {
    const removeAlert = document.getElementById('remove-alert');
    // @ts-ignore
    removeAlert.style.display = 'none';
  }

}
