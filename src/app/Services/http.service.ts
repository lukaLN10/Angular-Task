import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  protected _POSTS_: string = 'https://jsonplaceholder.typicode.com/posts';
  protected _USERS_: string = 'https://jsonplaceholder.typicode.com/users';
  protected _TODOS_: string = 'https://jsonplaceholder.typicode.com/todos';

  getPosts() {
    return this.http.get(this._POSTS_);
  }
  getUsers() {
    return this.http.get(this._USERS_);
  }
  getTodos(){
    return this.http.get(this._TODOS_);
  }
}
