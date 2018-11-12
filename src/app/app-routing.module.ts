import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieComponent} from './movie/movie.component';
import {MoviesComponent} from './movies/movies.component';
import {FeauredComponent} from './feaured/feaured.component';
import {SearchComponent} from './search/search.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'featured', component: FeauredComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'search/:s', component: SearchComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
