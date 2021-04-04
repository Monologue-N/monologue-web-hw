import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
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
