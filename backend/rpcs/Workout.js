const uuid = require('uuid').v4;
import {forEach} from 'lodash';

import RethinkWorkout from '../utils/rethinkdb/workout';

export default function (deepstreamClient) {

  deepstreamClient.rpc.provide('workout:create', (data, response) => {
    response.autoAck = false;

    const id = uuid();
    console.log(1111, data, id);

    const newRecord = deepstreamClient.record.getRecord('workout/' + id);
    newRecord.whenReady(() => {
      newRecord.set(data);
      newRecord.discard();

      response.send({id});
    });
  });
  
  deepstreamClient.rpc.provide('workout:get', (data, response) => {
    response.autoAck = false;

    if (!data.id) {
      response.error('workout:get - No ID provided');
    } else {
      deepstreamClient.record.snapshot('workout/c8d1fb64-933c-4f38-9731-d4387a9fb424', recordData => {
        console.log(999999, recordData);
        if (!recordData) {
          response.error('Record does not exist!');
        } else {
          console.log(`Returning workout ID: ${recordData.id}`);
          response.send(recordData);
        }
      });
    }
  });

  deepstreamClient.rpc.provide('workout:getAll', (data, response) => {
    response.autoAck = false;

    RethinkWorkout.getAllWorkouts()
      .then(allWorkouts => {
        let ids = [];
        forEach(allWorkouts, workout => {
          if (workout.ds_id) {
            ids.push(workout.ds_id);
          }
          // console.log(111, id.ds_id);
          // const rec = deepstreamClient.record.getRecord(`workout/${id.ds_id}`);
          // rec.whenReady(() => {
          //   console.log(555, rec.get());
          // })
        });
        response.send(ids);
      })
      .catch(err => {
        console.error('Deepsream getAll error:', err);
      });

    // deepstreamClient.record.snapshot('workout/7d774f8b-a456-446a-b951-ca8ba5def777', recordData => {
    //   console.log(4444, recordData);
    //   response.send(recordData);
    // })
  });
  
}