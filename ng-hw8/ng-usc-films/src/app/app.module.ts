import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomePageComponent,
    WatchlistComponent,
    MovieDetailsComponent,
    TvShowDetailsComponent,
    TrendingCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
