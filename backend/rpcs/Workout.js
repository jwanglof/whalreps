const uuid = require('uuid').v4;

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
      deepstreamClient.record.snapshot('workout/c8d1fb64-933c-4f38-9731-d4387a9fb424', data => {
        console.log(999999, data);
        if (!data) {
          response.error('Record does not exist!');
        } else {
          console.log(`Returning workout ID: ${data.id}`);
          response.send(data);
        }
      });
    }
  });
  
}