import {Routes, RouterModule} from '@angular/router';

import WorkoutCreate from './create/workout.create.component';
import WorkoutGet from './get/workout.get.component';
import WorkoutGetAll from './get-all/workout.getAll.component';
import WorkoutCounterComponent from './counter/counter.component';

const rootPath = 'workout';

export const routes: Routes = [
  {
    path: rootPath + '/create',
    component: WorkoutCreate
  },
  {
    path: rootPath + '/edit/:id',
    component: WorkoutCreate
  },
  {
    path: rootPath + '/get/:id',
    component: WorkoutGet
  },
  {
    path: rootPath + '/showAll',
    component: WorkoutGetAll
  },
  {
    path: rootPath + '/counter',
    component: WorkoutCounterComponent
  }
];

export const workoutRouting = RouterModule.forRoot(routes);
