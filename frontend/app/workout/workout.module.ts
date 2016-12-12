import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import WorkoutCreateComponent from './create/workout.create.component';
import WorkoutGetComponent from './get/workout.get.component';
import WorkoutGetAllComponent from './getAll/workout.getAll.component';

import WorkoutComponent from './components/workout/one-workout.component';

import {workoutRouting} from './workout.routes';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        workoutRouting
    ],
    declarations: [
        WorkoutCreateComponent,
        WorkoutGetComponent,
        WorkoutGetAllComponent,

        WorkoutComponent
    ],
    providers: [],
    bootstrap: []
})
export class WorkoutModule {}
