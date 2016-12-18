import {Component} from "@angular/core";
import {WorkoutModel} from "../workout.model";
import {ActivatedRoute} from "@angular/router";
import {WorkoutService} from "../workout.service";

@Component({
    selector: 'workout-create-form',
    styles: [require('./workout.create.component.css')],
    template: require('./workout.create.component.html'),
    providers: [WorkoutService]
})

export default class WorkoutCreateComponent {
    private id: string;

    model: WorkoutModel = new WorkoutModel();
    title: String = 'Create workout';
    buttonText: String = 'Create';

    success: boolean = false;
    error: boolean = false;
    
    errorMessage: string;

    constructor(private route: ActivatedRoute, private workoutService: WorkoutService) {
        this.id = this.route.snapshot.params['id'];
        if (this.id) {
            this.title = 'Edit workout';
            this.buttonText = 'Edit';
            this.getWorkout();
        }
    }

    private clearError() {
        this.error = false;
        this.errorMessage = '';
    }

    onSubmit() {
        this.clearError();
        if (this.id) {
            this.editWorkout();
        } else {
            this.createWorkout();
        }
    }

    private getWorkout() {
        this.workoutService.getWorkout(this.id)
            .then(workoutModel => {
                this.model = workoutModel;
                this.model.id = this.id;
            })
            .catch(err => {
                this.error = true;
                this.errorMessage = err;
            });
    }

    private createWorkout() {
        this.workoutService.createWorkout(this.model)
            .then(workoutId => {
                // Set the ID on the model so we can go-to it via the success-link
                this.model.id = workoutId;
                this.success = true;
            })
            .catch(err => {
                this.error = true;
                this.errorMessage = err;
            });
    }

    private editWorkout() {
        this.workoutService.editWorkout(this.model)
            .then(() => {
                this.success = true;
            })
            .catch(err => {
                this.error = true;
                this.errorMessage = err;
            });
    }
}
