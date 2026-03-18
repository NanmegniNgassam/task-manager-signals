import { Route } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { TaskService } from '../../core/services/task.service';

export const TASKS_ROUTE: Route[] = [
  {
    path: '',
    component: TasksComponent,
    providers: [TaskService],
  },
];
