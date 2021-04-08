import {Component, Input, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html'
})
export class VideoComponent implements OnInit {
  @Input() key: any;
  playerWidth: any;
  playerHeight: any;

  constructor(public breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    const isMobile = this.breakpointObserver.isMatched('(max-width: 500px)');
    if (isMobile) {
      console.log(window.innerWidth);
      this.playerWidth = `${window.innerWidth * 0.8}`;
      this.playerHeight = '200px';
    } else {
      this.playerWidth = '700px';
      this.playerHeight = '400px';
    }
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
