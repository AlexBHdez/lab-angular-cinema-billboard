import { Injectable, OnInit } from '@angular/core';
import moviesList from '../../../sample-movies';

@Injectable()
export class MoviesService {

  movies: Object[];

  constructor() { }

  ngOnInit() {
    this.movies = moviesList;
  }

  getMovies() {
    console.log(this.movies);
    return this.movies;
  }

  getMovie(id) {
    console.log(id);
  }

}
