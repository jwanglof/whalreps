import {Component, DoCheck, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import {WorkoutModel} from '../workout.model';
import {DeepstreamLocalClient} from '../../deepstream.client';
import * as forEach from 'lodash/forEach';
import {WorkoutComponent} from '../components/workout/one-workout.component';
import {Observable} from "rxjs/Rx";

@Component({
    selector: 'cmp',
    styles: [require('./workout.getAll.component.css')],
    template: require('./workout.getAll.component.html'),
    directives: [WorkoutComponent],
    moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export default class WorkoutGetAllComponent {
    private models: Array<WorkoutModel> = [];

    success: boolean;
    error: boolean;

    errorMessage: string;

    result: Object;

    constructor(private cd: ChangeDetectorRef) {
        this.success = false;
        this.error = false;
    }

    ngOnInit() {
        DeepstreamLocalClient.rpc.make('workout:getAll', {}, (error, result) => {
            if (error) {
                console.error('LOLZ ERROR:', error);
            } else {
                // Mark that there will be a change
                this.cd.markForCheck();
                // Counter so we know when to check for changes
                let i = 0;
                forEach(result, id => {
                    const record = DeepstreamLocalClient.record.getRecord(`workout/${id}`);
                    record.whenReady(() => {
                        const data = record.get();
                        const model = new WorkoutModel(data.ds_id, data.name, data.description, record);
                        // Add the model to models
                        this.models.push(model);

                        i++;

                        // Check for changes when all data is fetched
                        if (i === result.length) {
                            this.cd.detectChanges();
                        }
                    });
                });
            }
        });
    }
}