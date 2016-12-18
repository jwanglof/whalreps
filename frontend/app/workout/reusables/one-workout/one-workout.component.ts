import {Component, Input, ElementRef, OnInit} from "@angular/core";
import {WorkoutModel} from "../../workout.model";

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import AreYouSureModal from "../../../reusables/modals/are-you-sure/areYouSure.modal";
import {WorkoutService} from "../../workout.service";
import AddExerciseModal from "../add-exercise-modal/add-exercise-modal.component";

@Component({
    selector: 'one-workout',
    styles: [require('./one-workout.component.css')],
    template: require('./one-workout.component.html'),
    providers: [WorkoutService]
})
export class OneWorkoutComponent implements OnInit {
    @Input() workoutModel: WorkoutModel;
    @Input() hideEditButton: boolean = false;
    @Input() hideGetButton: boolean = false;
    @Input() hideAddExerciseButton: boolean = false;

    constructor(private modalService: NgbModal, private ref:ElementRef, private workoutService: WorkoutService) {}

    ngOnInit() {
        console.log(1111, this);
    }

    deleteWorkout() {
        const modalRef = this.modalService.open(AreYouSureModal);
        modalRef.componentInstance.body = `Are you sure you want to delete the workout named: ${this.workoutModel.name}`;
        modalRef.result
            .then(() => {
                // The user pressed 'Yes'
                return this.workoutService.deleteWorkout(this.workoutModel.id);
            })
            .then(() => {
                // Remove the element from DOM
                this.ref.nativeElement.remove();
            })
            .catch(() => {
                // The user pressed 'No'. Won't do anything
                console.log('cATCHED');
            });
    }

    addExercise() {
        const modalRef = this.modalService.open(AddExerciseModal, {backdrop: 'static', size: 'lg'});
        modalRef.componentInstance.workoutModel = this.workoutModel;
        console.log(333, this.workoutModel);
        modalRef.result
            .then(() => {
                console.log('then', this.workoutModel);
                return this.workoutService.editWorkout(this.workoutModel);
            })
            .then(() => {
                console.log('Done?');
            })
            .catch(() => {
                console.log('catech');
            });
    }
}