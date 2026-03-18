import { Component, inject } from '@angular/core';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskService } from '../../core/services/task.service';
import { TaskItemComponent } from './components/task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskFormComponent, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  private readonly _taskService: TaskService = inject(TaskService);
  protected tasks = this._taskService.$tasks;
}
