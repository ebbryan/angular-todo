import { Component, Input } from '@angular/core';
import { TodoType } from '../../pages/my-todos/my-todos.type';
import { LucideAngularModule, CircleDashed, Check } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-todo-item',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  readonly CheckIcon = Check;
  readonly CircleDashedIcon = CircleDashed;
  @Input() todo?: TodoType;
  @Input() onOpenModal!: (id: string) => void;
}
