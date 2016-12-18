import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import WorkoutCreateComponent from './create/workout.create.component';
import WorkoutGetComponent from './get/workout.get.component';
import WorkoutGetAllComponent from './get-all/workout.getAll.component';

import CounterComponent from './counter/counter.component';

import {OneWorkoutComponent} from './reusables/one-workout/one-workout.component';
import {workoutRouting} from "./workout.routes";
import {ReusablesModule} from "../reusables/reusables.module";
import AddExerciseModal from "./reusables/add-exercise-modal/add-exercise-modal.component";
import {OneSetComponent} from "./reusables/one-set/one-set.component";
import {OneSetCreateComponent} from "./reusables/one-set-create/one-set-create.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        workoutRouting,

        ReusablesModule
    ],
    declarations: [
        WorkoutCreateComponent,
        WorkoutGetComponent,
        WorkoutGetAllComponent,

        CounterComponent,

        OneWorkoutComponent,
        AddExerciseModal,
        OneSetComponent,
        OneSetCreateComponent
    ],
    providers: [],
    bootstrap: [],
    entryComponents: [
        AddExerciseModal
    ]
})
export class WorkoutModule {}
