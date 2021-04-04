import {Component, Input, OnInit} from '@angular/core';

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
      for (let i = 0; i < this.data.length && i < 24; i++) {
        console.log(this.data[i].poster_path);
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
    window.location.href = `/watch/tv/${id}`;
  }
}
