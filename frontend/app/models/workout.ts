export class Workout {
    public name: string;
    public description: string;

    constructor() {}

    toJSON() {
        let {name, description} = this;
        return {name, description}
    }
}