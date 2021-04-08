import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


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
  isMobile: any;
  isDesktop: any;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.isMobile = this.breakpointObserver.isMatched('(max-width: 500px)');
    this.isDesktop = this.breakpointObserver.isMatched('(min-width: 500px)');
    this.getData();
  }

  getData() {
    this.posts = this.posts.results;
    // console.log('images is ' + typeof(this.images));
    // console.log('images[0] is ' + typeof(this.images[0]));
  }

}
