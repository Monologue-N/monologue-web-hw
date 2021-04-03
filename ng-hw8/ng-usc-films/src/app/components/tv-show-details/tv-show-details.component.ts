import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css']
})
export class TvShowDetailsComponent implements OnInit, OnDestroy {
  private routeSub: Subscription | undefined;
  public id = '';
  public mediaType = '';
  public key = '';
  public tvShowDetails: any;
  public tvShowVideos: any;
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
  public recommendedTvShows: any;
  public similarTvShows: any;
  public castDetails: any;
  public external: any;
  public watchlistFlag: any = 'false';
  myStorage = window.localStorage;
  private selected: any;

  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      console.log(params.id);
      console.log(params.type);
      this.id = params.id;
      this.mediaType = params.type;
    });
    this.fetchData();
  }

  fetchData() {
    this.postsService.getTvShowDetails(this.id).subscribe(res => {
      this.tvShowDetails = res;
      // tslint:disable-next-line:radix
      this.releaseYear = parseInt(this.tvShowDetails.release_date);
      this.voteAverage = parseFloat(this.tvShowDetails.vote_average).toFixed(1);
      // tslint:disable-next-line:radix
      this.hours = Math.floor(this.tvShowDetails.runtime / 60);
      this.minutes = this.tvShowDetails.runtime - this.hours * 60;
      for (const genre of this.tvShowDetails.genres) {
        this.genres.push(genre.name);
      }
      this.genres = this.genres.join(', ');
      for (const language of this.tvShowDetails.spoken_languages) {
        this.spokenLanguages.push(language.english_name);
      }
      this.spokenLanguages.join(', ');
      this.overview = this.tvShowDetails.overview;
    });
    this.postsService.getTvShowVideos(this.id).subscribe(res => {
      this.tvShowVideos = res;
      this.key = this.tvShowVideos.results[0].key;
      if (!this.key) {
        this.key = 'tzkWB85ULJY';
      }
    });
    this.postsService.getTvShowCast(this.id).subscribe(res => {
      this.cast = res;
      this.cast = this.cast.cast;
    });
    this.postsService.getTvShowReviews(this.id).subscribe(res => {
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
      }
    });
    // fetch recommended movies data
    this.postsService.getRecommendedTvShows(this.id).subscribe(res => {
      this.recommendedTvShows = res;
    });
    // fetch similar movies data
    this.postsService.getSimilarTvShows(this.id).subscribe(res => {
      this.similarTvShows = res;
    });
  }

  ngOnDestroy() {
    // @ts-ignore
    this.routeSub.unsubscribe();
  }

  getCastDetails(person: string) {
    // this.elementRef.nativeElement.ownerDocument.body.style.position = 'fixed';
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


}
