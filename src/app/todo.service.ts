import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todos } from './todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:3000/todos';

  constructor(private httpclient: HttpClient) {}

  getAllTodo(): Observable<Todos[]> {
    return this.httpclient.get<Todos[]>(this.apiUrl);
  }

  createTodo(todo: Todos): Observable<Todos> {
    return this.httpclient.post<Todos>(this.apiUrl, todo, httpOption);
  }

  deleteTodos(todo: Todos): Observable<Todos> {
    const deleteUrl = `${this.apiUrl}/${todo.id}`;
    return this.httpclient.delete<Todos>(deleteUrl);
  }

  markAscomplete(todo: Todos): Observable<Todos> {
    const completeUrl = `${this.apiUrl}/${todo.id}`;
    return this.httpclient.put<Todos>(completeUrl, todo);
  }
}
