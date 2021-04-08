import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  public myStorage = window.localStorage;
  public json: any;
  public array: any = [];
  public dataArray: any = [];
  public isMobile: any;
  public isDesktop: any;

  constructor(private breakpointObserver: BreakpointObserver) {

  }

  ngOnInit(): void {
    this.isMobile = this.breakpointObserver.isMatched('(max-width: 500px)');
    this.isDesktop = this.breakpointObserver.isMatched('(min-width: 500px)');

    let watchlist = [];
    // if there is already some continue watching
    if (this.myStorage) {
      if (this.myStorage.getItem('watchlist')) {
        // check if this id exists
        watchlist = JSON.parse(this.myStorage.getItem('watchlist') as string);
        const arr = [];
        for (const one of watchlist) {
          arr.push(JSON.parse(one));
          // console.log(array);
        }
        this.array = arr;
      }
    }
    if (this.isMobile) {
      this.transformData2();
    }
    else if (this.isDesktop) {
      this.transformData();
    }
  }

  transformData() {
    // console.log(this.data);
    let j = -1;
    if (this.array) {
      // console.log('[transfromData] ' + this.data[0].poster_path);
      for (let i = 0; i < this.array.length; i++) {
        if (i % 6 === 0) {
          j++;
          this.dataArray[j] = [];
          this.dataArray[j].push(this.array[i]);
        }
        else {
          this.dataArray[j].push(this.array[i]);
        }
      }
    }
    console.log(this.dataArray);
  }

  transformData2() {
    // console.log(this.data);
    let j = -1;
    if (this.array) {
      // console.log('[transfromData] ' + this.data[0].poster_path);
      for (let i = 0; i < this.array.length; i++) {
        if (i % 1 === 0) {
          j++;
          this.dataArray[j] = [];
          this.dataArray[j].push(this.array[i]);
        }
        else {
          this.dataArray[j].push(this.array[i]);
        }
      }
    }
    console.log(this.dataArray);
  }
}
