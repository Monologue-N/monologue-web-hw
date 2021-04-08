import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import { MultiSearchData } from '../interface/multiSearchData';

// const SEARCH_URL = 'https://api.themoviedb.org/3/search/multi?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&query=';
const SEARCH_URL = 'http://localhost:8080/apis/posts/search/';
// const SEARCH_URL = '/apis/posts/search/';
// const PARAMS = new HttpParams({
//   fromObject: {
//     action: 'opensearch',
//     format: 'json',
//     origin: '*'
//   }
// });

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  data: Observable<MultiSearchData[]> | undefined;

  constructor(private http: HttpClient) {}

  search(term: string): Observable<MultiSearchData[]>{
    if (term === '') {
      return of([]);
    }
    // this.data = this.http.get<MultiSearchData[]>(SEARCH_URL + term).pipe(
    //   map(res => res as MultiSearchData[] || [])
    // );
    this.data = this.http.get<MultiSearchData[]>(SEARCH_URL + term).pipe(
      map(res => res as MultiSearchData[])
    );
    // @ts-ignore
    return this.data;
  }
}
