import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'myList', component: WatchlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
