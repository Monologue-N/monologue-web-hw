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
  }

  ngOnDestroy() {
    // @ts-ignore
    this.routeSub.unsubscribe();
  }


}
