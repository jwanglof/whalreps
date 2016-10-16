import {Component} from '@angular/core';
import {client} from '../../deepstream.client';
import {Workout} from '../../models/workout';

@Component({
    selector: 'workout-create-form',
    styles: [require('./workout.create.component.css')],
    template: require('./workout.create.component.html'),
    moduleId: module.id
})
export default class WorkoutCreateComponent {
    model: Workout;
    
    success: boolean;
    error: boolean;
    
    errorMessage: string;
    
    result: Object;

    constructor() {
        this.success = false;
        this.error = false;
        this.model = new Workout();
    }

    private clearError() {
        this.error = false;
        this.errorMessage = '';
    }

    onSubmit() {
        this.clearError();

        client.rpc.make('workout:create', this.model.toJSON(), (error, result) => {
            if (error) {
                this.error = true;
                this.errorMessage = 'Hej du!';
            } else {
                console.log(result);
                this.success = true;
                // this.model = new Workout();
                this.result = result;
                console.log(this.result);
            }
        });
    }
}
