import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public httpClient: HttpClient) { }

  getPost() {
    return this.httpClient.get("http://localhost:3000/tasks");
  }

  addPost(body) {
    return this.httpClient.post("http://localhost:3000/tasks", body)
  }
  deletePost(id) {
    return this.httpClient.delete("http://localhost:3000/tasks/" + id)
  }
  updatePost(id, body) {
    return this.httpClient.put("http://localhost:3000/tasks/" + id, body)
  }
}
