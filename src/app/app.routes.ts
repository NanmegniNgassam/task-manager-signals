import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/tasks/tasks.route').then((m) => m.TASKS_ROUTE),
  },
];
