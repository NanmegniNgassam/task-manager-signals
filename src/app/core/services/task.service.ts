import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Task } from '../../shared/models/task.model';
import { v4 } from 'uuid';

@Injectable()
export class TaskService {
  private readonly _$tasks: WritableSignal<Task[]> = signal<Task[]>([]);
  readonly $tasks: Signal<Task[]> = this._$tasks.asReadonly();

  /**
   * Adding a new task to the poll
   */
  createTask(title: string): Task {
    const newTask: Task = {
      title,
      id: this._generateRandomTaskId(),
      createdAt: new Date(),
      isCompleted: false,
    };

    this._$tasks.update((previousTasks) => [...previousTasks, newTask]);

    return newTask;
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
    const task = this._$tasks().find((task) => task.id === id);

    if (!task) return;

    this._$tasks.update((previousTasks) =>
      previousTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }
        return task;
      }),
    );
  }

  private _generateRandomTaskId(): string {
    const alreadyUsedIds = this.$tasks().map((task) => task.id);

    let idCandidate = v4();
    while (alreadyUsedIds.includes(idCandidate)) {
      idCandidate = v4();
    }

    return idCandidate;
  }
}
