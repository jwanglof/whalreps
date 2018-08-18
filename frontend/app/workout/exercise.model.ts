import {SetModel} from "./set.model";
import {forEach} from 'lodash';
import {UUID} from 'angular2-uuid';

export class ExerciseModel {
    // private _id: string;
    // Create a unique id so that we can find this exercise in the workout's exercise-list if necessary
    id: string = UUID.UUID();
    private _name: string;
    private _sets: Array<SetModel> = [];

    constructor() {}

    toJSON() {
        const values = {
            name: this.name,
            sets: []
        };

        // Make the set-list pretty
        if (this.sets.length > 0) {
            forEach(this.sets, set => {
                values.sets.push(set.toJSON());
            });
        }

        return values;
    }

    // get id(): string {
    //     return this._id;
    // }
    //
    // set id(value: string) {
    //     this._id = value;
    // }

    get sets(): Array<SetModel> {
        return this._sets;
    }

    set sets(value: Array<SetModel>) {
        this._sets = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}