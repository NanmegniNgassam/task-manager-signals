import { Component, inject, input } from '@angular/core';
import { TaskService } from '../../../../core/services/task.service';
import { Task } from '../../../../shared/models/task.model';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
})
export class TaskItemComponent {
  private readonly _taskService = inject(TaskService);
  task = input.required<Task>();

  /**
   * Delete the current task
   */
  protected deleteCurrentTask() {
    this._taskService.deleteTask(this.task().id);
  }

  /**
   * Change the task completion status
   */
  protected toggleTaskCompletion() {
    this._taskService.toggleTaskCompletion(this.task().id);
  }
}
