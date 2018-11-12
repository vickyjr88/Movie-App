import { Component, OnInit } from '@angular/core';
import {RestclientService} from '../restclient.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public movies: Smovie[];

  constructor(private restClient: RestclientService) { }

  ngOnInit() {
    this.getMovies();
  }

  private getMovies() {
    this.restClient.getMovies('1', 'hour').subscribe(
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
