import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  // const deployLink = "";

  constructor(private httpClient: HttpClient) { }

  getAllPosts() {
    // const url = 'http://localhost:8080/apis/posts';
    const url = '/apis/posts';
    return this.httpClient.get(url);
  }


  getPopularMovies() {
    // const url = 'http://localhost:8080/apis/posts/popularMovies';
    const url = '/apis/posts/popularMovies';
    return this.httpClient.get(url);
  }

  getTopRatedMovies() {
    // const url = 'http://localhost:8080/apis/posts/topRatedMovies';
    const url = '/apis/posts/topRatedMovies';
    return this.httpClient.get(url);
  }

  getTrendingMovies() {
    // const url = 'http://localhost:8080/apis/posts/trendingMovies';
    const url = '/apis/posts/trendingMovies';
    return this.httpClient.get(url);
  }

  getPopularTvShows() {
    // const url = 'http://localhost:8080/apis/posts/popularTvShows';
    const url = '/apis/posts/popularTvShows';
    return this.httpClient.get(url);
  }

  getTopRatedTvShows() {
    // const url = 'http://localhost:8080/apis/posts/topRatedTvShows';
    const url = '/apis/posts/topRatedTvShows';
    return this.httpClient.get(url);
  }

  getTrendingTvShows() {
    // const url = 'http://localhost:8080/apis/posts/trendingTvShows';
    const url = '/apis/posts/trendingTvShows';
    return this.httpClient.get(url);
  }

  getMovieDetails(id: string) {
    // const url = 'http://localhost:8080/apis/posts/movieDetails/' + id;
    const url = '/apis/posts/movieDetails/' + id;
    return this.httpClient.get(url);
  }

  getMovieVideos(id: string) {
    // const url = 'http://localhost:8080/apis/posts/movieVideos/' + id;
    const url = '/apis/posts/movieVideos/' + id;
    return this.httpClient.get(url);
  }

  getMovieCast(id: string) {
    // const url = 'http://localhost:8080/apis/posts/movieCast/' + id;
    const url = '/apis/posts/movieCast/' + id;
    return this.httpClient.get(url);
  }

  getMovieReviews(id: string) {
    // const url = 'http://localhost:8080/apis/posts/movieReviews/' + id;
    const url = '/apis/posts/movieReviews/' + id;
    return this.httpClient.get(url);
  }

  getRecommendedMovies(id: string) {
    // const url = 'http://localhost:8080/apis/posts/recommendedMovies/' + id;
    const url = '/apis/posts/recommendedMovies/' + id;
    return this.httpClient.get(url);
  }

  getSimilarMovies(id: string) {
    // const url = 'http://localhost:8080/apis/posts/similarMovies/' + id;
    const url = '/apis/posts/similarMovies/' + id;
    return this.httpClient.get(url);
  }

  getTvShowDetails(id: string) {
    // const url = 'http://localhost:8080/apis/posts/tvshowDetails/' + id;
    const url = '/apis/posts/tvshowDetails/' + id;
    return this.httpClient.get(url);
  }

  getTvShowVideos(id: string) {
    // const url = 'http://localhost:8080/apis/posts/tvshowVideos/' + id;
    const url = '/apis/posts/tvshowVideos/' + id;
    return this.httpClient.get(url);
  }

  getTvShowCast(id: string) {
    // const url = 'http://localhost:8080/apis/posts/tvshowCast/' + id;
    const url = '/apis/posts/tvshowCast/' + id;
    return this.httpClient.get(url);
  }

  getTvShowReviews(id: string) {
    // const url = 'http://localhost:8080/apis/posts/tvshowReviews/' + id;
    const url = '/apis/posts/tvshowReviews/' + id;
    return this.httpClient.get(url);
  }

  getRecommendedTvShows(id: string) {
    // const url = 'http://localhost:8080/apis/posts/recommendedTvShows/' + id;
    const url = '/apis/posts/recommendedTvShows/' + id;
    return this.httpClient.get(url);
  }

  getSimilarTvShows(id: string) {
    // const url = 'http://localhost:8080/apis/posts/similarTvShows/' + id;
    const url = '/apis/posts/similarTvShows/' + id;
    return this.httpClient.get(url);
  }

  getCastDetails(person: string) {
    // const url = 'http://localhost:8080/apis/posts/castDetails/' + person;
    const url = '/apis/posts/castDetails/' + person;
    return this.httpClient.get(url);
  }

  getCastExternal(person: string) {
    // const url = 'http://localhost:8080/apis/posts/castExternal/' + person;
    const url = '/apis/posts/castExternal/' + person;
    return this.httpClient.get(url);
  }
}
