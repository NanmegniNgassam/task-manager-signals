import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Task } from '../../shared/models/task.model';

@Injectable()
export class TaskService {
  private readonly _$tasks: WritableSignal<Task[]> = signal<Task[]>([]);
  readonly $tasks: Signal<Task[]> = this._$tasks.asReadonly();

  /**
   * Adding a new task to the poll
   */
  createTask(title: string) {
    const newTask: Task = {
      title,
      id: globalThis.crypto.randomUUID(),
      createdAt: new Date(),
      isCompleted: false,
    };

    this._$tasks.update((previousTasks) => [...previousTasks, newTask]);
  }

  /**
   * Remove the task from the check-list
   */
  deleteTask(id: string): void {
    this._$tasks.update((previousTasks) => previousTasks.filter((task) => task.id !== id));
  }

  /**
   * Set the task as done and reversely
   */
  toggleTaskCompletion(id: string): void {
    this._$tasks.update((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  }
}
