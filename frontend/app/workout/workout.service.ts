import {Injectable} from "@angular/core";
import {forEach} from "lodash";
import getLocalDeepstreamClient from "../deepstream.client";
import {WorkoutModel} from "./workout.model";

@Injectable()
export class WorkoutService {
    constructor() {}

    /**
     * Get all workouts
     * @returns {Promise<Array<WorkoutModel>>}
     */
    getAllWorkouts(): Promise<WorkoutModel[]> {
        const workouts: WorkoutModel[] = [];

        return new Promise<Array<WorkoutModel>>((resolve, reject) => {
            this.getDsClient()
                .then(dsClient => {
                    dsClient.rpc.make('workout:get-all', {}, (error, result) => {
                        if (error) {
                            reject(error);
                        } else {
                            // Counter so we know when to check for changes
                            let i = 0;
                            forEach(result, id => {
                                const record = dsClient.record.getRecord(`workout/${id}`);

                                const model = new WorkoutModel();
                                model.record = record;

                                record.whenReady(() => {
                                    const data = record.get();
                                    model.id = id;
                                    model.name = data.name;
                                    model.description = data.description;

                                    // Add the model to models
                                    workouts.push(model);

                                    i++;

                                    // Resolve with all the models
                                    if (i === result.length) {
                                        resolve(workouts);
                                    }
                                });
                            });
                        }
                    });
                });
        });
    }

    /**
     *
     * @param id
     * @returns {Promise<WorkoutModel>}
     */
    getWorkout(id: string) {
        return new Promise<WorkoutModel>((resolve, reject) => {
            this.getDsClient()
                .then(dsClient => {
                    dsClient.rpc.make('workout:get', {id}, (error, data) => {
                        if (error) {
                            reject(error);
                        } else {
                            const model = new WorkoutModel();
                            model.id = id;
                            model.name = data.name;
                            model.description = data.description;
                            model.record = dsClient.record.getRecord(`workout/${id}`);
                            model.exercises = data.exercises;
                            resolve(model);
                        }
                    });
                });
        });
    }

    deleteWorkout(id: string) {
        return new Promise((resolve, reject) => {
            this.getDsClient()
                .then(dsClient => {
                    dsClient.rpc.make('workout:delete', {id}, (error, response) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve();
                        }
                    });
                });
        });
    }

    createWorkout(workoutModel: WorkoutModel) {
        return new Promise<string>((resolve, reject) => {
            this.getDsClient()
                .then(dsClient => {
                    dsClient.rpc.make('workout:create', workoutModel.toJSON(), (error, result) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(result);
                        }
                    });
                });
        });
    }

    editWorkout(workoutModel: WorkoutModel) {
        return new Promise((resolve, reject) => {
            this.getDsClient()
                .then(dsClient => {
                    dsClient.rpc.make('workout:edit', workoutModel.toJSON(true), (error, result) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(result);
                        }
                    });
                });
        });
    }

    /**
     * Wrapper to get the Deepstream client
     * @returns {Promise<U>}
     */
    private getDsClient() {
        return getLocalDeepstreamClient()
            .then(dsClient => dsClient)
            .catch(err => {
                console.error('Error when fetching dsClient:', err);
            });
    }
}
