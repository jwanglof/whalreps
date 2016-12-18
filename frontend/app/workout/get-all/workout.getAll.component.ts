import {Component, OnInit} from "@angular/core";
import {WorkoutModel} from "../workout.model";
import {WorkoutService} from "../workout.service";

@Component({
    selector: 'cmp',
    styles: [require('./workout.getAll.component.css')],
    template: require('./workout.getAll.component.html'),
    providers: [WorkoutService]
})

export default class WorkoutGetAllComponent implements OnInit {
    models: Array<WorkoutModel>;

    success: boolean = false;

    error: boolean = false;

    errorMessage: string;

    constructor(private workoutService: WorkoutService) {}

    ngOnInit() {
        this.workoutService.getAllWorkouts()
            .then(workouts => {
                console.log(34333, workouts);
                this.models = workouts;
            })
            .catch(err => {
                console.error(4444, err);
            });
    }
}