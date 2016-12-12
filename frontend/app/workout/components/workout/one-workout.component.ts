import {Component, Input} from "@angular/core";
import {WorkoutModel} from "../../workout.model";

@Component({
    selector: 'one-workout',
    styles: [require('./one-workout.component.css')],
    template: require('./one-workout.component.html'),
})

export default class OneWorkoutComponent {
    @Input() workoutModel: WorkoutModel;
    constructor() {}
}