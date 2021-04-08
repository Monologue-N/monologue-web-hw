import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {PostsService} from '../../services/posts.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css']
})
export class CastDetailsComponent implements OnInit {
  @Input() details: any;
  public gender: any;
  @Input() external: any;
  isMobile: any;
  isDesktop: any;

  constructor(private elementRef: ElementRef, private postsService: PostsService, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  this.isMobile = this.breakpointObserver.isMatched('(max-width: 500px)');
  this.isDesktop = this.breakpointObserver.isMatched('(min-width: 500px)');
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
    if (this.isDesktop) {
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

    else if (this.isMobile) {
      // @ts-ignore
      // document.getElementById('card-details-container').style.background = 'transparent';
      document.getElementById('mask').style.display = 'none';
      // @ts-ignore
      document.getElementById('mask').style.background = 'transparent';
      // @ts-ignore
      document.getElementById('card2').style.display = 'none';
      // @ts-ignore
      // document.getElementById('layout').style.overflow = 'scroll';
      this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'scroll';
      // this.elementRef.nativeElement.ownerDocument.body.style = 'body::-webkit-scrollbar: { overflow: scroll; }';
      // document.getElementById('card-mask').style.
    }

  }

}
