import {Component} from '@angular/core';
import {DeepstreamLocalClient} from '../../deepstream.client';
import {WorkoutModel} from '../workout.model';

@Component({
    selector: 'workout-create-form',
    styles: [require('./workout.create.component.css')],
    template: require('./workout.create.component.html'),
    moduleId: module.id
})

export default class WorkoutCreateComponent {
    model: WorkoutModel;
    
    success: boolean;
    error: boolean;
    
    errorMessage: string;
    
    result: Object;

    constructor() {
        this.success = false;
        this.error = false;
        this.model = new WorkoutModel();
    }

    private clearError() {
        this.error = false;
        this.errorMessage = '';
    }

    onSubmit() {
        this.clearError();

        DeepstreamLocalClient.rpc.make('workout:create', this.model.toJSON(), (error, result) => {
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
