import {Component, OnInit} from '@angular/core';
import {Observable, of, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap, catchError, tap} from 'rxjs/operators';
import { SearchService } from '../../services/search.service';
import { MultiSearchData } from '../../interface/multiSearchData';

@Component({
  selector: 'app-type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.css']
})
export class TypeAheadComponent implements OnInit {
  model: any;
  searching = false;
  searchFailed = false;
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    }

  search = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      // switchMap allows returning an observable rather than maps array
      switchMap( (term) =>  this.searchService.search(term)),
    );
  }

}



