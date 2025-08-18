import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { environment } from '../../../environments/environment.development';
import { Todo, TodosResponse } from './my-todos.type';


@Component({
  selector: 'app-my-todos',
  imports: [FormsModule, CommonModule],
  templateUrl: './my-todos.html',
  styleUrl: './my-todos.css',
})
export class MyTodos {
  isLoading = signal(false);
  newTodo: string = '';

  todos: Todo[] = [];

  ngOnInit() {
    this.fetchTodos();
  }

  async fetchTodos() {
    try {
      this.isLoading.set(true);
      const response = await fetch(`${environment.apiUrl}/todos`);
      const data: TodosResponse = await response.json();
      this.todos = data.data;
      if (this.todos.length === 0) {
        this.todos = [];
      }
      this.isLoading.set(false);
      console.log('Fetched todos:', this.todos);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  }

  onSubmit(event: Event) {
    let payload = {};
    event.preventDefault();
    if (!this.newTodo.trim()) return;
    payload = { title: this.newTodo, status: 'pending' };

    console.log('🚀 ~ MyTodos ~ onSubmit ~ payload:', payload);

    this.newTodo = '';
  }
}
