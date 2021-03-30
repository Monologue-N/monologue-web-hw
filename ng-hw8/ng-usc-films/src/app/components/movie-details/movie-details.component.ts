import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import { PostsService } from '../../services/posts.service';

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

  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      console.log(params.id);
      this.id = params.id;
    });
    this.fetchData();
  }

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
      this.key = this.movieVideos.results[0].key;
    });
  }

  ngOnDestroy() {
    // @ts-ignore
    this.routeSub.unsubscribe();
  }

}
