import { Component, inject, signal } from '@angular/core';
import { form, FormField, maxLength, minLength, required } from '@angular/forms/signals';
import { TaskService } from '../../../../core/services/task.service';

@Component({
  selector: 'app-task-form',
  imports: [FormField],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent {
  private readonly _taskService = inject(TaskService);
  protected createModel = signal<{ title: string }>({
    title: '',
  });
  protected createForm = form(this.createModel, (schema) => {
    required(schema.title);
    minLength(schema.title, 5);
    maxLength(schema.title, 30);
  });

  createTask(event: SubmitEvent) {
    event.preventDefault();

    this._taskService.createTask(this.createForm.title().value());

    this.createForm.title().value.set('');
  }
}
