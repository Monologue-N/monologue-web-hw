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
import { Component, OnInit } from '@angular/core';

@Component({
  template: '<youtube-player videoId="6zTc2hD2npA"></youtube-player>',
  selector: 'app-video',
})
export class VideoComponent implements OnInit {
  ngOnInit() {
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
