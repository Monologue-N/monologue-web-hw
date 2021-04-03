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
    if (this.continue !== 'true') {
      this.data = this.data.results;
    }
    this.transformData();
  }

  transformData() {
    let j = -1;
    if (this.data) {
      // console.log(this.data);
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
    console.log(this.dataArray);
  }

  reloadPage(id: any) {
    window.location.href = `/watch/movie/${id}`;
  }
}
