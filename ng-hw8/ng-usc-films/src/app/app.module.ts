import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { YouTubePlayerModule } from '@angular/youtube-player';
// import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
// import { faFontAwesomeFlag } from '@fortawesome/free-brands-svg-icons';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

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
    TvCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
