import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css']
})
export class CastDetailsComponent implements OnInit {
  @Input() details: any;

  constructor() { }

  ngOnInit(): void {
  }

}
