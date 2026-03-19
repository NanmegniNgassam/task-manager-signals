import { Component, inject } from '@angular/core';
import { TaskService } from '../../core/services/task.service';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { CompletionStatus } from '../../shared/models/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskFormComponent, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  protected readonly taskService: TaskService = inject(TaskService);
  protected readonly completionStatus: CompletionStatus[] = [
    CompletionStatus.ALL,
    CompletionStatus.DONE,
    CompletionStatus.IN_PROGRESS,
  ];

  protected changeStatusFilter(selectedStatus: CompletionStatus) {
    this.taskService._$completionFilter.set(selectedStatus);
  }
}
