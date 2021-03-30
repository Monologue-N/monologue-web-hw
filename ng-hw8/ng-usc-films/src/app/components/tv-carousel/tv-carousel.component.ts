import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tv-carousel',
  templateUrl: './tv-carousel.component.html',
  styleUrls: ['./tv-carousel.component.css']
})
export class TvCarouselComponent implements OnInit {

  @Input() data: any;
  public mobile: any;
  public dataArray: any = [];

  constructor() { }

  ngOnInit(): void {
    if (window.screen.width === 360) { // 768px portrait
      this.mobile = true;
    }
    this.data = this.data.results;
    this.transformData();
    console.log(this.dataArray);
    for (const group of this.dataArray) {
      for (const one of group) {
        console.log(one.backdrop_path);
      }
    }
  }

  transformData() {
    let j = -1;
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

}
