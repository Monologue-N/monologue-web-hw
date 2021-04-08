import {Component, OnInit, OnDestroy, ElementRef, Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../../services/posts.service';
import * as $ from 'jquery';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  private routeSub: Subscription | undefined;
  public btnContent = '';
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
  public external: any;
  public watchlistFlag: any = 'false';
  myStorage = window.localStorage;
  private selected: any;
  isMobile: any;
  isDesktop: any;

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private postsService: PostsService, private elementRef: ElementRef, private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.isMobile = this.breakpointObserver.isMatched('(max-width: 500px)');
    this.isDesktop = this.breakpointObserver.isMatched('(min-width: 500px)');
    if (window.location.pathname === '/mylist') {
      // @ts-ignore
      document.getElementById('my-list').className = 'nav-link active';
      // @ts-ignore
      document.getElementById('home').className = 'nav-link';
    } else {
      // @ts-ignore
      document.getElementById('home').className = 'nav-link active';
      // @ts-ignore
      document.getElementById('my-list').className = 'nav-link';
    }

    this.routeSub = this.route.params.subscribe(params => {
      // console.log(params);
      console.log(params.id);
      this.id = params.id;
      this.checkWatchList();
    });
    this.fetchData();

    if (document.getElementById('typeahead-http')) {
      // @ts-ignore
      document.getElementById('typeahead-http').innerHTML = '';
    }
  }
  checkWatchList() {
    // check if it is in watchlist
    let watchlist = [];
    // if there is already some continue watching
    if (this.myStorage) {
      if (this.myStorage.getItem('watchlist')) {
        // check if this id exists
        watchlist = JSON.parse(this.myStorage.getItem('watchlist') as string);
        const array = [];
        for (const one of watchlist) {
          array.push(one);
          // console.log(array);
        }
        // traverse continue watching list
        // tslint:disable-next-line:prefer-for-of
        for (let idx = 0; idx < array.length; idx++) {
          // console.log('[each one] ' + JSON.parse(array[idx]).title);
          // console.log(parseInt(JSON.parse(array[idx]).id) === parseInt(this.id));
          // console.log('json id ' + JSON.parse(array[idx]).id + 'type' + typeof(JSON.parse(array[idx]).id));
          // console.log('type of ' + typeof(this.id));
          // tslint:disable-next-line:radix
          // @ts-ignore
          // tslint:disable-next-line:radix
          if (parseInt(JSON.parse(array[idx]).id) === parseInt(this.id)) {
            // console.log('[before]' + array);
            this.watchlistFlag = 'true';
            // console.log('[addToContinueWatching]' + array);
          }
        }
      }
    }
    console.log('watchlistFlag is ' + this.watchlistFlag);
    if (this.watchlistFlag === 'true') {
        this.btnContent = 'Remove from watchlist';
      } else {
        this.btnContent = 'Add to watchlist';
      }
    console.log(this.btnContent);
  }


  fetchData() {
    this.postsService.getMovieDetails(this.id).subscribe(res => {
      this.movieDetails = res;
      this.mediaType = 'movie';
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
      // @ts-ignore
      this.addToContinueWatching();
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
         // console.log(date);
          // tslint:disable-next-line:radix
          const newDate = new Date(date);
         // console.log(newDate);
          const mo = new Intl.DateTimeFormat('en', {month: 'long'}).format(newDate);
          const da = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(newDate);
          // const ho = new Intl.DateTimeFormat('en', { hour: 'numeric' }).format(newDate);
          let min = new Intl.DateTimeFormat('en', {minute: 'numeric'}).format(newDate);
          let sec = new Intl.DateTimeFormat('en', {second: 'numeric'}).format(newDate);

          if (min.length < 2) {
            min = '0' + min;
          }
          if (sec.length < 2) {
            sec = '0' + sec;
          }

          if (newDate.getHours() === 12) {
            review.created_at = `${mo} ${da}, ${newDate.getFullYear()}, ${newDate.getHours()}:${min}:${sec} PM`;
          } else if (newDate.getHours() < 12) {
            review.created_at = `${mo} ${da}, ${newDate.getFullYear()}, ${newDate.getHours()}:${min}:${sec} AM`;
          } else {
            review.created_at = `${mo} ${da}, ${newDate.getFullYear()}, ${newDate.getHours() - 12}:${min}:${sec} PM`;
          }
          console.log(review.rating);

          if (!review.author_details.rating) {
            review.rating = 0;
          } else {
            review.rating = review.author_details.rating;
          }
          console.log(review.rating);
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
    let continueWatching = [];
    // if there is already some continue watching
    if (this.myStorage) {
      if (this.myStorage.getItem('continue_watching')) {
        // check if this id exists
        continueWatching = JSON.parse(this.myStorage.getItem('continue_watching') as string);
        // console.log('[you have] ' + continueWatching);
        const array = [];
        for (const one of continueWatching) {
          array.push(one);
          // console.log(array);
        }
        // traverse continue watching list
        for (let idx = 0; idx < array.length; idx++) {
          // console.log('[each one] ' + JSON.parse(array[idx]).title);
          // console.log(parseInt(JSON.parse(array[idx]).id) === parseInt(this.id));
          // console.log('json id ' + JSON.parse(array[idx]).id + 'type' + typeof(JSON.parse(array[idx]).id));
          // console.log('type of ' + typeof(this.id));
          // tslint:disable-next-line:radix
          // @ts-ignore
          // tslint:disable-next-line:radix
          if (parseInt(JSON.parse(array[idx]).id) === parseInt(this.id)) {
            // console.log('[before]' + array);
            array.splice(idx, 1);
            // console.log('[addToContinueWatching]' + array);
          }
        }
        continueWatching = array;
      }
    }
    // console.log('[addToContinueWatching] ' + this.title);
    continueWatching.unshift(`{"id": ${this.id}, "title": \"${this.title}\", "poster_path": \"${this.poster_path}\", "type": \"${this.mediaType}\" }`);
    this.myStorage.setItem('continue_watching', JSON.stringify(continueWatching));
    // console.log(this.myStorage);
  }


  getCastDetails(person: string) {
    if (this.isDesktop) {
      // @ts-ignore
      // document.getElementById('layout').style.overflow =  'hidden';
      // this.elementRef.nativeElement.ownerDocument.body.style = 'body::-webkit-scrollbar: { overflow: hidden; }';
      this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
      // @ts-ignore
      document.getElementById('mask').style.display = 'block';
      // @ts-ignore
      document.getElementById('mask').style.background = 'rgba(0,0,0,0.6)';
      // @ts-ignore
      document.getElementById('cast-details-card').style.overflowY = 'scroll';
      console.log('here');

      this.postsService.getCastDetails(person).subscribe(res => {
        this.castDetails = res;
      });
      this.postsService.getCastExternal(person).subscribe(res => {
        this.external = res;
      });
      if (document.getElementById('card')) {
        // @ts-ignore
        document.getElementById('card').style.display = 'block';
      }
    }
    else if (this.isMobile) {
      // const cast = document.createElement('app-cast-details');
      // cast.setAttribute('target', 'castDetails');
      // cast.setAttribute('external', 'external');
      // // @ts-ignore
      // document.getElementById('cast-details').appendChild(cast);
      this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
      // @ts-ignore
      document.getElementById('mask').style.display = 'block';
      // @ts-ignore
      document.getElementById('mask').style.background = 'rgba(0,0,0,0.6)';

      this.postsService.getCastDetails(person).subscribe(res => {
        this.castDetails = res;
      });
      this.postsService.getCastExternal(person).subscribe(res => {
        this.external = res;
      });
      if (document.getElementById('card2')) {
        // @ts-ignore
        document.getElementById('card2').style.display = 'block';
      }
    }
  }

  ngOnDestroy() {
    // @ts-ignore
    this.routeSub.unsubscribe();
  }

  toggle() {
    const addToWatchListBtn = document.getElementById('watchlist-btn');
    // @ts-ignore
    console.log('innerHTML: ' + addToWatchListBtn.innerHTML);
    console.log('another: ' + 'Add to watchlist');
    // @ts-ignore
    console.log(typeof(addToWatchListBtn.innerHTML));
    console.log(typeof('Add to watchlist'));
    // @ts-ignore
    console.log(JSON.stringify(addToWatchListBtn.innerHTML) === JSON.stringify('Add to watchlist'));
    // @ts-ignore
    // if (addToWatchListBtn.innerHTML === 'Add to watchlist') {
    if (this.btnContent === 'Add to watchlist') {
      console.log('I am here');
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
    this.btnContent = 'Remove from watchlist';
    // add to local storage
    let watchlist = [];
    // let flag = 'false';
    // if there is already some in watchlist
    if (this.myStorage) {
      if (this.myStorage.getItem('watchlist')) {
        // extract current watchlist
        watchlist = JSON.parse(this.myStorage.getItem('watchlist') as string);
        const array = [];
        for (const one of watchlist) {
          array.push(one);
          // console.log(array);
        }
        // // tslint:disable-next-line:prefer-for-of
        // for (let idx = 0; idx < array.length; idx++) {
        //   // tslint:disable-next-line:radix
        //   if (parseInt(array[idx].id) === parseInt(this.id)) {
        //     flag = 'true';
        //   }
        // }
        watchlist = array;
      }
    }
    // if (flag === 'false') {
    watchlist.unshift(`{"id": ${this.id}, "title": \"${this.title}\", "poster_path": \"${this.poster_path}\", "type": \"${this.mediaType}\"}`);
    // }
    this.myStorage.setItem('watchlist', JSON.stringify(watchlist));
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
    this.btnContent = 'Add to watchlist';
    // remove from local storage
    let watchlist = [];
    // if there is already some continue watching
    if (this.myStorage) {
      if (this.myStorage.getItem('watchlist')) {
        // check if this id exists
        watchlist = JSON.parse(this.myStorage.getItem('watchlist') as string);
        // console.log('[you have] ' + continueWatching);
        const array = [];
        for (const one of watchlist) {
          array.push(one);
          // console.log(array);
        }
        // traverse continue watching list
        for (let idx = 0; idx < array.length; idx++) {
          // console.log('[each one] ' + JSON.parse(array[idx]).title);
          // console.log(parseInt(JSON.parse(array[idx]).id) === parseInt(this.id));
          // console.log('json id ' + JSON.parse(array[idx]).id + 'type' + typeof(JSON.parse(array[idx]).id));
          // console.log('type of ' + typeof(this.id));
          // tslint:disable-next-line:radix
          // @ts-ignore
          // tslint:disable-next-line:radix
          if (parseInt(JSON.parse(array[idx]).id) === parseInt(this.id)) {
            // console.log('[before]' + array);
            array.splice(idx, 1);
            // console.log('[addToContinueWatching]' + array);
          }
        }
        watchlist = array;
      }
    }
    // console.log('[addToContinueWatching] ' + this.title);
    this.myStorage.setItem('watchlist', JSON.stringify(watchlist));
    console.log(window.localStorage);
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

  // redirectTo(uri:string){
  //   this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
  //     this.router.navigate([uri]));
  // }

}
