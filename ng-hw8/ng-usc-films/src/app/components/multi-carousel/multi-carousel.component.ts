import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multi-carousel',
  templateUrl: './multi-carousel.component.html',
  styleUrls: ['./multi-carousel.component.css']
})
export class MultiCarouselComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    this.data = this.data.results;
  }

}
