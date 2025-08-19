import { Component, Input } from '@angular/core';
import { TodoType } from '../../pages/my-todos/my-todos.type';
import { TodoItem } from '../todo-item/todo-item';

@Component({
  selector: 'app-todo',
  imports: [TodoItem],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  @Input() todos: TodoType[] = [];
  @Input() isLoading: boolean | undefined;
}
