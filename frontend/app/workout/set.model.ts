export class SetModel {
    // private _id: string;
    private _repetitions: number = 0;
    private _weightKg: number = 0;

    constructor() {}

    toJSON() {
        let {repetitions, weightKg} = this;
        return {repetitions, weightKg};
    }

    // get id(): string {
    //     return this._id;
    // }
    //
    // set id(value: string) {
    //     this._id = value;
    // }

    get repetitions(): number {
        return this._repetitions;
    }

    set repetitions(value: number) {
        this._repetitions = value;
    }

    get weightKg(): number {
        return this._weightKg;
    }

    set weightKg(value: number) {
        this._weightKg = value;
    }
}