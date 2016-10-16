import {Routes, RouterModule} from '@angular/router';

import {Home} from './home';
import {About} from './about';
import {WorkoutCreate, WorkoutGet} from './workout';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'workout/create',
    component: WorkoutCreate
  },
  {
    path: 'workout/get/:id',
    component: WorkoutGet
  }
];

export const routing = RouterModule.forRoot(routes);
