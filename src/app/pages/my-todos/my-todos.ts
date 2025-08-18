import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Todo, TodosResponse } from './my-todos.type';

@Component({
  selector: 'app-my-todos',
  imports: [FormsModule, CommonModule],
  templateUrl: './my-todos.html',
  styleUrl: './my-todos.css',
})
export class MyTodos {
  newTodo: string = '';

  todos: Todo[] = [];

  ngOnInit() {
    this.fetchTodos();
  }

  async fetchTodos() {
    try {
      const response = await fetch('http://localhost:8339/todos');
      const data: TodosResponse = await response.json();
      this.todos = data.data;
      console.log('Fetched todos:', this.todos);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  }

  onSubmit(event: Event) {
    let payload = {};
    event.preventDefault();
    if (!this.newTodo.trim()) return;
    payload = { todo: this.newTodo };

    console.log('🚀 ~ MyTodos ~ onSubmit ~ payload:', payload);

    this.newTodo = '';
  }
}
