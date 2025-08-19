import { Component, Input } from '@angular/core';
import { TodoType } from '../../pages/my-todos/my-todos.type';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  @Input() todo?: TodoType;
}
