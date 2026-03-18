import { Component, inject } from '@angular/core';
import { TaskService } from '../../core/services/task.service';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskItemComponent } from './components/task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskFormComponent, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  protected readonly taskService: TaskService = inject(TaskService);
}
