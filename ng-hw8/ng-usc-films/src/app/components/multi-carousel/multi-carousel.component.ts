import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multi-carousel',
  templateUrl: './multi-carousel.component.html',
  styleUrls: ['./multi-carousel.component.css']
})
export class MultiCarouselComponent implements OnInit {
  @Input() data: any;
  public mobile: any;
  public dataArray: any = [];
  myStorage = window.localStorage;

  constructor() { }

  ngOnInit(): void {
    if (window.screen.width === 360) { // 768px portrait
      this.mobile = true;
    }
    this.data = this.data.results;
    this.transformData();
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
