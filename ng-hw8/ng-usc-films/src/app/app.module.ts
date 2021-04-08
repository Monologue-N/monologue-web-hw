import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { YouTubePlayerModule } from '@angular/youtube-player';
// import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
// import { faFontAwesomeFlag } from '@fortawesome/free-brands-svg-icons';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgScrollbarModule } from 'ngx-scrollbar';
import {Router, ActivatedRoute, ParamMap, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { TvShowDetailsComponent } from './components/tv-show-details/tv-show-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TrendingCarouselComponent } from './components/trending-carousel/trending-carousel.component';
import { MultiCarouselComponent } from './components/multi-carousel/multi-carousel.component';
import { TypeAheadComponent } from './components/type-ahead/type-ahead.component';
import { FormsModule } from '@angular/forms';
import { VideoComponent } from './components/video/video.component';
import { TvCarouselComponent } from './components/tv-carousel/tv-carousel.component';
import { CastDetailsComponent } from './components/cast-details/cast-details.component';
import { MixedCarouselComponent } from './components/mixed-carousel/mixed-carousel.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomePageComponent,
    WatchlistComponent,
    MovieDetailsComponent,
    TvShowDetailsComponent,
    TrendingCarouselComponent,
    MultiCarouselComponent,
    TypeAheadComponent,
    VideoComponent,
    TvCarouselComponent,
    CastDetailsComponent,
    MixedCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    YouTubePlayerModule,
    NgScrollbarModule,
    ScrollingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
