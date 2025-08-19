import axios from 'axios';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment.development';
import { TodoType, TodosResponse } from './my-todos.type';
import { TodoItem } from '../../components/todo-item/todo-item';

@Component({
  selector: 'app-my-todos',
  imports: [FormsModule, CommonModule, TodoItem],
  templateUrl: './my-todos.html',
  styleUrl: './my-todos.css',
})
export class MyTodos {
  isLoading = signal(false);
  error = signal('');
  newTodo: string = '';

  todos: TodoType[] = [];

  endpoint = axios.create({
    baseURL: environment.apiUrl,
  });

  ngOnInit() {
    this.fetchTodos();
  }

  async fetchTodos() {
    try {
      this.isLoading.set(true);
      const response = await fetch(`${environment.apiUrl}/todos`);
      const data: TodosResponse = await response.json();
      this.todos = data.data
        .filter((todo) => todo.status !== 'archived')
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

      this.isLoading.set(false);
      console.log('Fetched todos:', this.todos);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  }

  onSubmit(event: any) {
    event.preventDefault();
    const payload = {
      title: this.newTodo,
      status: 'pending',
    };
    if (this.newTodo.trim() === '') {
      this.error.set('Todo cannot be empty');
      return;
    }
    this.endpoint
      .post('/todos', payload)
      .then((response) => {
        console.log(response);
        this.fetchTodos();
        this.newTodo = '';
        this.error.set('');
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
