import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class RestclientService {

  private readonly base_url: string;
  private readonly key: string;

  constructor(private httpClient: HttpClient) {
    this.base_url = 'http://www.omdbapi.com/';
    this.key = 'apikey=6c3a2d45';
  }

  search(page: string, s: string): Observable<any> {
    return this.httpClient.get<Search>(`${this.base_url}?s=${s}&page=${page}&${this.key}`);
  }

  getMovies(page: string, s: string): Observable<any> {
    return this.httpClient.get<Search>(`${this.base_url}?s=${s}&page=${page}&type=movie&${this.key}`);
  }

  getMovie(s: string): Observable<any> {
    let _s = encodeURI(s);
    return this.httpClient.get<Movie>(`${this.base_url}?t=${_s}&${this.key}`);
  }

  getMovieById(i: string): Observable<any> {
    return this.httpClient.get<Movie>(`${this.base_url}?i=${i}&${this.key}`);
  }

}
