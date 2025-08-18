import { Routes } from '@angular/router';


import { AboutTodoApp } from './pages/about-todo-app/about-todo-app';
import { MyTodos } from './pages/my-todos/my-todos';


export const routes: Routes = [
  { path: 'my-todos', title: 'My Todos', component: MyTodos },
  { path: 'about-todo-app', title: 'About Todo App', component: AboutTodoApp },
];
