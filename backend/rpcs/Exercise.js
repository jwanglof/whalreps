const uuid = require('uuid').v4;

export default function (deepstreamClient) {

  deepstreamClient.rpc.provide('exercise:create', (data, response) => {
    response.autoAck = false;

    const id = uuid();

    const newRecord = deepstreamClient.record.getRecord(`exercise/${id}`);
    newRecord.whenReady(() => {
      newRecord.set(data);
      newRecord.discard();

      response.send(id);
    });
  });

}