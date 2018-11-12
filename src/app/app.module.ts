import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MovieComponent} from './movie/movie.component';
import {MoviesComponent} from './movies/movies.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {FeauredComponent} from './feaured/feaured.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {SearchComponent} from './search/search.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RestclientService} from './restclient.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesComponent,
    NotFoundComponent,
    FeauredComponent,
    SidebarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    RestclientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
