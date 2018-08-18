import {Component, Input, OnInit} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {WorkoutModel} from "../../workout.model";
import {ExerciseModel} from "../../exercise.model";
import {SetModel} from "../../set.model";
import {filter} from "lodash";

@Component({
    selector: 'add-exercise-modal',
    styles: [require('./add-exercise-modal.component.css')],
    template: require('./add-exercise-modal.component.html')
})
export default class AddExerciseModal implements OnInit {
    @Input() workoutModel: WorkoutModel;

    buttonText: string = 'Add exercise';
    exerciseModel: ExerciseModel = new ExerciseModel();

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {}

    onSubmit() {
        this.workoutModel.exercises.push(this.exerciseModel);
        console.log(this);
        this.activeModal.close();
    }

    addSet() {
        this.exerciseModel.sets.push(new SetModel());
    }

    removeSet(setModel: SetModel) {
        this.exerciseModel.sets = filter(this.exerciseModel.sets, s => {
            return s.id !== setModel.id;
        });
    }
}
