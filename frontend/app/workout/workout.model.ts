import {ExerciseModel} from "./exercise.model";
import {forEach} from 'lodash';
import {SetModel} from "./set.model";

export class WorkoutModel {
    private today = new Date();
    private _id: string;
    private _name: string = `${this.today.getUTCFullYear()}-${this.today.getUTCMonth() + 1}-${this.today.getUTCDate()}`;
    private _notes: string;
    private _record: Object;
    private _exercises: Array<ExerciseModel> = [];

    // constructor(public id?:string, public name?:string, public notes?:string, public record?:Object) {
    constructor() {}

    toJSON(includeId: boolean = false) {
        const values = {
            name: this.name,
            notes: this.notes,
            exercises: []
        };

        if (this.exercises.length > 0) {
            forEach(this.exercises, exercise => {
                values.exercises.push(exercise.toJSON());
            });
        }

        if (includeId) {
            values['id'] = this.id;
        }
        return values;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get notes(): string {
        return this._notes;
    }

    set notes(value: string) {
        this._notes = value;
    }

    get record(): Object {
        return this._record;
    }

    set record(value: Object) {
        this._record = value;
    }

    get exercises(): Array<ExerciseModel> {
        return this._exercises;
    }

    set exercises(value: Array<ExerciseModel>) {
        if (value.length > 0) {
            const exercises: Array<ExerciseModel> = [];
            forEach(value, v => {
                const exercise = new ExerciseModel();
                exercise.name = v.name;
                exercise.sets = [];
                if (v.sets.length > 0) {
                    forEach(v.sets, s => {
                        const set = new SetModel();
                        set.repetitions = s.repetitions;
                        set.weightKg = s.weightKg;
                        exercise.sets.push(set);
                    });
                }
                exercises.push(exercise);
            });
            this._exercises = exercises;
        } else {
            this._exercises = value;
        }
    }
}