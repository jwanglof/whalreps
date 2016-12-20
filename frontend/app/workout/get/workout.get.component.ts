import {ActivatedRoute} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {WorkoutModel} from "../workout.model";
import {WorkoutService} from "../workout.service";

@Component({
    selector: 'get-workout',
    styles: [require('./workout.get.component.css')],
    template: require('./workout.get.component.html'),
    providers: [WorkoutService]
})
export default class WorkoutCreateComponent implements OnInit {
    private id: string;

    error: boolean;
    errorMessage: string;

    model: WorkoutModel = new WorkoutModel();

    constructor(private route: ActivatedRoute, private workoutService: WorkoutService) {
        this.id = this.route.snapshot.params['id'];
    }

    ngOnInit() {
        this.workoutService.getWorkout(this.id)
            .then(model => {
                this.model = model;
            })
            .catch(err => {
                this.error = true;
                this.errorMessage = err;
            });
    }
}