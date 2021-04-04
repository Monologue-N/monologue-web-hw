import { Component, OnInit } from '@angular/core';

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

  constructor() {
  }

  ngOnInit(): void {
    // if (this.myStorage) {
    //     if (this.myStorage.getItem('watchlist')) {
    //       for (let i = 0; i < this.myStorage.length; i++) {
    //         // const key = this.myStorage.key(i);
    //         // if (key !== null) {
    //         //   const value = this.myStorage.getItem(key);
    //         //   // @ts-ignore
    //         //   this.json = JSON.parse(value);
    //         //   if (this.json.watchlist === 'true') {
    //         //     // @ts-ignore
    //         //     this.array.push(this.json);
    //         //   }
    //         // }
    //       }
    //     }
    // }
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
    this.transformData();
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
}
