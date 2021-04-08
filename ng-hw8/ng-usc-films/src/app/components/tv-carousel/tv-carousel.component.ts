import {Component, Input, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-tv-carousel',
  templateUrl: './tv-carousel.component.html',
  styleUrls: ['./tv-carousel.component.css']
})
export class TvCarouselComponent implements OnInit {
  @Input() data: any;
  @Input() continue: any;
  public mobile: any;
  public dataArray: any = [];
  myStorage = window.localStorage;
  isMobile: any;
  isDesktop: any;

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    // if (window.screen.width === 360) { // 768px portrait
    //   this.mobile = true;
    // }
    this.isMobile = this.breakpointObserver.isMatched('(max-width: 500px)');
    this.isDesktop = this.breakpointObserver.isMatched('(min-width: 500px)');
    // console.log('continue is ' + this.continue);
    // console.log('array is  ' + this.data);
    if (this.continue !== 'true') {
      this.data = this.data.results;
      // console.log('check if continue');
    }
    if (this.isDesktop) {
      this.transformData();
    } else if (this.isMobile){
      this.transformData2();
    }
  }

  transformData() {
    // console.log(this.data);
    let j = -1;
    if (this.data) {
      for (let i = 0; i < this.data.length && i < 24; i++) {
        // console.log(this.data[i].poster_path);
        if (i % 6 === 0) {
          j++;
          this.dataArray[j] = [];
          this.dataArray[j].push(this.data[i]);
        }
        else {
          this.dataArray[j].push(this.data[i]);
        }
      }
    }
    // console.log(this.dataArray);
  }

  transformData2() {
    // console.log(this.data);
    let j = -1;
    if (this.data) {
      for (let i = 0; i < this.data.length && i < 24; i++) {
        // console.log(this.data[i].poster_path);
        if (i % 1 === 0) {
          j++;
          this.dataArray[j] = [];
          this.dataArray[j].push(this.data[i]);
        }
        else {
          this.dataArray[j].push(this.data[i]);
        }
      }
    }
    // console.log(this.dataArray);
  }

  reloadPage(id: any) {
    window.location.href = `/watch/tv/${id}`;
  }
}
