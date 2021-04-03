import {Component, Input, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-multi-carousel',
  templateUrl: './multi-carousel.component.html',
  styleUrls: ['./multi-carousel.component.css']
})
export class MultiCarouselComponent implements OnInit {
  @Input() data: any;
  @Input() continue: any;
  public mobile: any;
  public dataArray: any = [];
  myStorage = window.localStorage;

  constructor() { }

  ngOnInit(): void {
    if (window.screen.width === 360) { // 768px portrait
      this.mobile = true;
    }
    // console.log('continue is ' + this.continue);
    // console.log('array is  ' + this.data);
    if (this.continue !== 'true') {
      this.data = this.data.results;
      // console.log('check if continue');
    }
    this.transformData();
  }

  transformData() {
    // console.log(this.data);
    let j = -1;
    if (this.data) {
      // console.log('[transfromData] ' + this.data[0].poster_path);
      for (let i = 0; i < this.data.length; i++) {
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

  reloadPage(id: any) {
    window.location.href = `/watch/movie/${id}`;
  }
}
