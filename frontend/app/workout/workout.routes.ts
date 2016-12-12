import {Routes, RouterModule} from '@angular/router';

import WorkoutCreate from './create/workout.create.component';
import WorkoutGet from './get/workout.get.component';
import WorkoutGetAll from './getAll/workout.getAll.component';

export const routes: Routes = [
  {
    path: 'workout/create',
    component: WorkoutCreate
  },
  {
    path: 'workout/get/:id',
    component: WorkoutGet
  },
  {
    path: 'workout/showAll',
    component: WorkoutGetAll
  }
];

export const workoutRouting = RouterModule.forRoot(routes);
