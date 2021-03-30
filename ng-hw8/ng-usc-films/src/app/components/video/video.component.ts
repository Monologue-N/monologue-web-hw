// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-video',
//   templateUrl: './video.component.html',
//   styleUrls: ['./video.component.css']
// })
// export class VideoComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit(): void {
//   }
//
// }
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html'
})
export class VideoComponent implements OnInit {
  @Input() key: any;

  ngOnInit() {
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
//  template: '<youtube-player videoId="6zTc2hD2npA"></youtube-player>',