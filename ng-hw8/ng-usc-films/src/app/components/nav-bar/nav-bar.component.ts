import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
