import { Component, OnInit } from '@angular/core';
import {RestclientService} from '../restclient.service';

@Component({
  selector: 'app-feaured',
  templateUrl: './feaured.component.html',
  styleUrls: ['./feaured.component.css']
})
export class FeauredComponent implements OnInit {
  public movie_a: Movie;
  public movie_b: Movie;
  public fmoviea = false;
  public fmovieb = false;

  constructor(private restClient: RestclientService) {
    // this.movies = [];
    this.movie_a = <Movie>{};
    this.movie_b = <Movie>{};
  }

  ngOnInit() {
    this.getMovies();
  }

  private getMovies() {
    this.restClient.getMovie('Bridge of Spies').subscribe(
      res => {
        console.log(res);
        this.movie_a = res;
        this.fmoviea = true;
        // this.movies.
      },
      err => {
        console.log(err.statusText);
      }
    );

    this.restClient.getMovie('Batman & Robin').subscribe(
      res => {
        console.log(res);
        this.movie_b = res;
        this.fmovieb = true;
      },
      err => {
        console.log(err.statusText);
      }
    );
  }
}
