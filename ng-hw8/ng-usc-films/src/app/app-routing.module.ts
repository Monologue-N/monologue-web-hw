import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {TvShowDetailsComponent} from './components/tv-show-details/tv-show-details.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'watch/movie/:id', component: MovieDetailsComponent},
  { path: 'watch/tv/:id', component: TvShowDetailsComponent},
  { path: 'mylist', component: WatchlistComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
