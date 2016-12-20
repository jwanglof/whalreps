const uuid = require('uuid').v4;
import {forEach} from 'lodash';

import RethinkWorkout from '../utils/rethinkdb/workout';

export default function (deepstreamClient) {

  deepstreamClient.rpc.provide('workout:create', (data, response) => {
    response.autoAck = false;

    const id = uuid();

    const newRecord = deepstreamClient.record.getRecord(`workout/${id}`);
    newRecord.whenReady(() => {
      const now = Date.now();
      data.created = now;
      data.updated = now;

      newRecord.set(data);
      newRecord.discard();

      response.send(id);
    });
  });
  
  deepstreamClient.rpc.provide('workout:get', (data, response) => {
    response.autoAck = false;

    if (!data.id) {
      response.error('workout:get - No ID provided');
    } else {
      deepstreamClient.record.snapshot(`workout/${data.id}`, (err, recordData) => {
        if (!recordData) {
          response.error('Record does not exist!');
        } else {
          response.send(recordData);
        }
      });
    }
  });

  deepstreamClient.rpc.provide('workout:get-all', (data, response) => {
    response.autoAck = false;

    RethinkWorkout.getAllWorkouts()
      .then(allWorkouts => {
        let ids = [];
        forEach(allWorkouts, workout => {
          if (workout.ds_id) {
            ids.push(workout.ds_id);
          }
        });
        response.send(ids);
      })
      .catch(err => {
        console.error('Deepstream get-all error:', err);
        response.error(err);
      });
  });

  deepstreamClient.rpc.provide('workout:delete', (data, response) => {
    if (!data.id) {
      response.error('workout:delete - No ID provided!');
    } else {
      const workoutRecord = deepstreamClient.record.getRecord(`workout/${data.id}`);
      workoutRecord.whenReady(() => {
        workoutRecord.delete();
        response.send();
      });
    }
  });

  deepstreamClient.rpc.provide('workout:edit', (data, response) => {
    if (!data.id) {
      response.error('workout:edit - No ID provided!');
    } else {
      const workoutRecord = deepstreamClient.record.getRecord(`workout/${data.id}`);
      workoutRecord.whenReady(() => {
        workoutRecord.set({
          name: data.name,
          notes: data.notes,
          exercises: data.exercises,
          updated: Date.now()
        });
        response.send();
      });
    }
  });
  
}