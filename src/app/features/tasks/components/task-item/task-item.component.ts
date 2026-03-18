import { Component, input, Signal } from '@angular/core';
import { Task } from '../../../../shared/models/task.model';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
})
export class TaskItemComponent {
  task = input.required<Task>();
}
