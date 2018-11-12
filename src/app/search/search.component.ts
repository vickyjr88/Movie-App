import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestclientService} from '../restclient.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {
  public movies: Smovie[];
  public movie: Movie;
  public s: string | null;

  constructor(private restClient: RestclientService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.s = this.activatedRoute.snapshot.paramMap.get('s');
    this.search(this.s);

    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('s'));
      this.s = params.get('s');
      this.search(this.s);
    });
  }

  ngOnChanges() {
    this.s = this.activatedRoute.snapshot.paramMap.get('s');
    this.search(this.s);
  }

  private search(s: string) {
    this.restClient.search('1', s).subscribe(
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
