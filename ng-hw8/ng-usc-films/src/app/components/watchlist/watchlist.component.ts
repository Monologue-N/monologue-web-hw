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

  constructor() { }

  ngOnInit(): void {
    if (this.myStorage) {
      for (let i = 0; i < this.myStorage.length; i++) {
        const key = this.myStorage.key(i);
        if (key !== null) {
          const value = this.myStorage.getItem(key);
          // @ts-ignore
          this.json = JSON.parse(value);
          if (this.json.watchlist === 'true') {
            // @ts-ignore
            this.array.push(this.json);
          }
        }
      }
    }
  }

}
