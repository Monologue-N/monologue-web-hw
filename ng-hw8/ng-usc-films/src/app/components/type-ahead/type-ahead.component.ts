import {Component, OnInit} from '@angular/core';
import {Observable, of, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap, catchError, tap} from 'rxjs/operators';
import { SearchService } from '../../services/search.service';
import { MultiSearchData } from '../../interface/multiSearchData';
import * as $ from 'jquery';
import {NgbTypeaheadSelectItemEvent} from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.css']
})
export class TypeAheadComponent implements OnInit {
  selectedOne: any;
  model: any;
  searching = false;
  searchFailed = false;
  constructor(private searchService: SearchService, private route: ActivatedRoute, private router: Router ) {}

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

  formatter = (result: string) => result.toUpperCase();

  onSelect(selected: any) {
    // @ts-ignore
    // document.getElementById('typeahead-http').setAttribute('ng-reflect-model', '');
    this.selectedOne = selected.item;
    console.log(this.selectedOne);
    console.log(this.selectedOne.id);
    console.log(this.selectedOne.media_type);
    // @ts-ignore
    // this.router.navigateByUrl(`/watch/${this.selectedOne.media_type}/${this.selectedOne.id}`);
    window.location.href = `/watch/${this.selectedOne.media_type}/${this.selectedOne.id}`;
  }

}



