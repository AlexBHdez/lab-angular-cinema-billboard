import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  movies: Object[];

  constructor(private MoviesService: MoviesService) { }

  ngOnInit() {
    this.MoviesService.getMovies();
    this.movies = this.MoviesService.movies;
  }

}
