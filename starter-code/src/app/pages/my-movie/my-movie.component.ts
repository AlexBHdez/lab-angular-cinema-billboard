import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  movieId: number;
  movieInfo: any;

  constructor(private MoviesList: MoviesService, private rout: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rout.params
      .subscribe((params) => this.movieId = Number(params['id']));

    this.movieInfo = this.MoviesList.getMovie(this.movieId);
  }

  goHome() {
    this.router.navigate(['/home']);
  }

}
