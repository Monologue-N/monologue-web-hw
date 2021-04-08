import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isMobile: any;
  isDesktop: any;

  constructor(private router: ActivatedRoute, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.isMobile = this.breakpointObserver.isMatched('(max-width: 500px)');
    this.isDesktop = this.breakpointObserver.isMatched('(min-width: 500px)');
    // console.log(window.location.pathname);
    // @ts-ignore
    if (window.location.pathname === '/mylist') {
      // @ts-ignore
      document.getElementById('my-list').className = 'nav-link active';
      // @ts-ignore
      document.getElementById('home').className = 'nav-link';
    } else {
      // @ts-ignore
      document.getElementById('home').className = 'nav-link active';
      // @ts-ignore
      document.getElementById('my-list').className = 'nav-link';
    }
  }

  toggleToHome() {
    // @ts-ignore
    document.getElementById('home').className = 'nav-link active';
    // @ts-ignore
    document.getElementById('my-list').className = 'nav-link';

  }

  toggleToMyList() {
    // @ts-ignore
    document.getElementById('my-list').className = 'nav-link active';
    // @ts-ignore
    document.getElementById('home').className = 'nav-link';

  }

}
