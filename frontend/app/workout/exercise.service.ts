import {Injectable} from "@angular/core";
import {ExerciseModel} from "./exercise.model";
import getLocalDeepstreamClient from "../deepstream.client";

@Injectable()
export class ExerciseService {
    constructor() {}

    createExercise(exerciseModel: ExerciseModel): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.getDsClient()
                .then(dsClient => {
                    dsClient.rpc.make('exercise:create', exerciseModel.toJSON(), (error, result) => {
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