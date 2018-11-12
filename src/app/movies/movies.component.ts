import { Component, OnInit } from '@angular/core';
import {RestclientService} from '../restclient.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public movies: Smovie[];

  constructor(private restClient: RestclientService) { }

  ngOnInit() {
    this.getMovies();
  }

  private getMovies() {
    this.restClient.getMovies('1', 'batman').subscribe(
      res => {
        console.log(res.data);
        this.movies = res.Search;
      },
      err => {
        console.log(err.statusText);
      }
    );
  }

}
