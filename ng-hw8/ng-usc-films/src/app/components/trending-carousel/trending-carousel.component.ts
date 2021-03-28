import {Component, Input, OnInit} from '@angular/core';
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
  //
  // public message: string = "Passing the data!";
  // public posts: any

  // constructor(config: NgbCarouselConfig) {
  //   constructor() {
      // config.interval = 2000;
    // config.keyboard = true;
    // config.pauseOnHover = true;
  //
  // }
  constructor() {}

  ngOnInit(): void {
  }


}
