import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css']
})
export class CastDetailsComponent implements OnInit {
  @Input() details: any;
  public gender: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    if (this.details.gender === 1) {
      this.gender = 'Female';
    } else if (this.details.gender === 2) {
      this.gender = 'Male';
    }
  }

  closeDetails() {
    // @ts-ignore
    document.getElementById('card').style.display = 'none';
    // this.elementRef.nativeElement.ownerDocument.body.style.position = 'static';
    // document.getElementById('card-mask').style.
  }

}
