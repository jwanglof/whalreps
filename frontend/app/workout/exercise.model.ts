import {SetModel} from "./set.model";
import {forEach} from 'lodash';

export class ExerciseModel {
    // private _id: string;
    private _name: string;
    private _sets: Array<SetModel> = [];

    constructor() {}

    toJSON(includeId: boolean = false) {
        const values = {
            name: this.name,
            sets: []
        };

        if (this.sets.length > 0) {
            forEach(this.sets, set => {
                values.sets.push(set.toJSON());
            });
        }

        // if (includeId) {
        //     values['id'] = this.id;
        // }
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