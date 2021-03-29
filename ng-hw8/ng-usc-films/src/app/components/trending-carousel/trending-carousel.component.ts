import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-trending-carousel',
  templateUrl: './trending-carousel.component.html',
  styleUrls: ['./trending-carousel.component.css'],
})

// providers: [NgbCarouselConfig]
export class TrendingCarouselComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  @Input() dataReceived = 'DefaultValue!';
  @Input() posts: any;

  constructor() {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.posts = this.posts.results;
    console.log('images is ' + typeof(this.images));
    console.log('images[0] is ' + typeof(this.images[0]));
  }

}
