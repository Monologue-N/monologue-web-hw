import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts() {
    const url = 'http://localhost:8080/posts';
    return this.httpClient.get(url);
  }

  // getSearch(keyword: string) {
  //   const url = 'http://localhost:8080/posts/search/' + keyword;
  //   return this.httpClient.get(url);
  // }

  getPopularMovies() {
    const url = 'http://localhost:8080/posts/popularMovies';
    return this.httpClient.get(url);
  }

  getTopRatedMovies() {
    const url = 'http://localhost:8080/posts/topRatedMovies';
    return this.httpClient.get(url);
  }

  getTrendingMovies() {
    const url = 'http://localhost:8080/posts/trendingMovies';
    return this.httpClient.get(url);
  }

  getPopularTvShows() {
    const url = 'http://localhost:8080/posts/popularTvShows';
    return this.httpClient.get(url);
  }

  getTopRatedTvShows() {
    const url = 'http://localhost:8080/posts/topRatedTvShows';
    return this.httpClient.get(url);
  }

  getTrendingTvShows() {
    const url = 'http://localhost:8080/posts/trendingTvShows';
    return this.httpClient.get(url);
  }

  getMovieDetails(id: string) {
    const url = 'http://localhost:8080/posts/movieDetails/' + id;
    return this.httpClient.get(url);
  }

  getMovieVideos(id: string) {
    const url = 'http://localhost:8080/posts/movieVideos/' + id;
    return this.httpClient.get(url);
  }

  getMovieCast(id: string) {
    const url = 'http://localhost:8080/posts/movieCast/' + id;
    return this.httpClient.get(url);
  }

  getMovieReviews(id: string) {
    const url = 'http://localhost:8080/posts/movieReviews' + id;
    return this.httpClient.get(url);
  }

  getRecommendedMovies(id: string) {
    const url = 'http://localhost:8080/posts/recommendedMovies/' + id;
    return this.httpClient.get(url);
  }

  getSimilarMovies(id: string) {
    const url = 'http://localhost:8080/posts/similarMovies/' + id;
    return this.httpClient.get(url);
  }

  getTvShowDetails(id: string) {
    const url = 'http://localhost:8080/posts/tvshow/' + id;
    return this.httpClient.get(url);
  }

  getTvShowVideos(id: string) {
    const url = 'http://localhost:8080/posts/tvshowVideos/' + id;
    return this.httpClient.get(url);
  }

  getTvShowCast(id: string) {
    const url = 'http://localhost:8080/posts/tvshowCast' + id;
    return this.httpClient.get(url);
  }

  getTvShowReviews(id: string) {
    const url = 'http://localhost:8080/posts/tvshowReviews' + id;
    return this.httpClient.get(url);
  }

  getRecommendedTvShows(id: string) {
    const url = 'http://localhost:8080/posts/recommendedTvShows/' + id;
    return this.httpClient.get(url);
  }

  getSimilarTvShows(id: string) {
    const url = 'http://localhost:8080/posts/similarTvShows/' + id;
    return this.httpClient.get(url);
  }

  getCastDetails(person: string) {
    const url = 'http://localhost:8080/posts/castDetails/' + person;
    return this.httpClient.get(url);
  }

  getCastExternal(person: string) {
    const url = 'http://localhost:8080/posts/castExternal/' + person;
    return this.httpClient.get(url);
  }
}
