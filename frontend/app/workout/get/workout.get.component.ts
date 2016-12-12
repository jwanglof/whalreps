import {ActivatedRoute} from "@angular/router";
import {Component, OnInit} from '@angular/core';
import {DeepstreamLocalClient} from '../../deepstream.client';
import {WorkoutModel} from '../workout.model';

@Component({
    selector: 'get-workout',
    styles: [require('./workout.get.component.css')],
    template: require('./workout.get.component.html'),
    moduleId: module.id
})
export default class WorkoutCreateComponent {

    private id: string;

    error: boolean;
    errorMessage: string;

    model: WorkoutModel;

     constructor(
         private route: ActivatedRoute
     ) {}

    ngOnInit() {
        console.log(111, this.route.snapshot);
        this.id = this.route.snapshot.params['id'];

        DeepstreamLocalClient.rpc.make('workout:get', {id: this.id}, (error, result) => {

            console.log(444444, error, result);

            if (error) {
                this.error = true;
                this.errorMessage = 'Hej du!';
            } else {
                this.model = new WorkoutModel();
                // this.model.name = result.name;
                // this.model.description = result.description;
            }
        });
    }
}