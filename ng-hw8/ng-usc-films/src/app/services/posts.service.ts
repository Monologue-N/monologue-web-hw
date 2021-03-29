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

  getTvShowDetails(id: string) {
    const url = 'http://localhost:8080/posts/tvshow/' + id;
    return this.httpClient.get(url);
  }

  getTvShowVideos(id: string) {
    const url = 'http://localhost:8080/posts/tvshowVideos/' + id;
    return this.httpClient.get(url);
  }
}
