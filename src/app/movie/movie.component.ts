import { Component, OnInit } from '@angular/core';
import {RestclientService} from '../restclient.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public movie: Movie;
  private id: string | null;

  constructor(private restClient: RestclientService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getMovie();
  }

  private getMovie() {
    this.restClient.getMovieById(this.id).subscribe(
      res => {
        console.log(res);
        this.movie = res;
        // this.movies.
      },
      err => {
        console.log(err.statusText);
      }
    );
  }

}
