export class WorkoutModel {
    // public id: string;
    // public name: string;
    // public description: string;
    // public record: Object;

    constructor()
    constructor(public id?:string, public name?:string, public description?:string, public record?:Object) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.record = record;
    }

    toJSON() {
        let {id, name, description} = this;
        return {id, name, description}
    }
}