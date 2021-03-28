import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts() {
    const url = 'http://locohost:8080/posts';
    return this.httpClient.get(url);
  }
}
