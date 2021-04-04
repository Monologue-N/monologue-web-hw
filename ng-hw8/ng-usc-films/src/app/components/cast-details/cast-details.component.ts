import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css']
})
export class CastDetailsComponent implements OnInit {
  @Input() details: any;
  public gender: any;
  @Input() external: any;

  constructor(private elementRef: ElementRef, private postsService: PostsService) { }

  ngOnInit(): void {
    if (this.details.gender === 1) {
      this.gender = 'Female';
    } else if (this.details.gender === 2) {
      this.gender = 'Male';
    }
    // window.onload = () => {
    //   console.log(document.getElementById('card-details-container'));
    //   if (document.getElementById('card-details-container')) {
    //     // @ts-ignore
    //     document.getElementById('card-details-container').style.background = 'rgba(0,0,0,0.5)';
    //   }
    // };
  }


  closeDetails() {
    // @ts-ignore
    // document.getElementById('card-details-container').style.background = 'transparent';
    document.getElementById('mask').style.display = 'none';
    // @ts-ignore
    document.getElementById('mask').style.background = 'transparent';
    // @ts-ignore
    document.getElementById('card').style.display = 'none';
    // @ts-ignore
    // document.getElementById('layout').style.overflow = 'scroll';
    this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'scroll';
    // this.elementRef.nativeElement.ownerDocument.body.style = 'body::-webkit-scrollbar: { overflow: scroll; }';
    // document.getElementById('card-mask').style.
  }

}
