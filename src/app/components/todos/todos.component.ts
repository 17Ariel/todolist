import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  todolist: Todos[] = [];

  ngOnInit(): void {
    this.todoService
      .getAllTodo()
      .subscribe((todolist) => (this.todolist = todolist));
  }

  newTodo(todo: Todos) {
    this.todoService
      .createTodo(todo)
      .subscribe((todolist) => this.todolist.push(todolist));

    return this.todolist;
  }

  removeTodo(todo: Todos) {
    this.todoService
      .deleteTodos(todo)
      .subscribe(
        () => (this.todolist = this.todolist.filter((t) => t.id !== todo.id))
      );
  }

  completedTodos(todo: Todos) {
    todo.completed = true;
    this.todoService.markAscomplete(todo).subscribe();
  }
}
