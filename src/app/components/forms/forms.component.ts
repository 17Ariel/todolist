import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todos } from 'src/app/todo';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  @Output() addTodo: EventEmitter<Todos> = new EventEmitter();

  id: number = 0;
  todo: string = '';
  completed: boolean = false;
  isError: boolean = false;

  constructor() {}
  ngOnInit(): void {}

  submit(todoForm: NgForm) {
    const tododata: Todos = {
      id: this.id,
      todo: this.todo,
      completed: this.completed,
    };

    if (!this.todo) {
      this.isError = true;
      return;
    }

    this.addTodo.emit(tododata);

    todoForm.resetForm();
  }
}
