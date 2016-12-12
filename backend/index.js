const DeepstreamServer = require('deepstream.io');
const deepstreamClient = require('deepstream.io-client-js')('localhost:6021', {});
const RethinkDBStorageConnector = require('deepstream.io-storage-rethinkdb');

const deepstreamInstance = new DeepstreamServer({});

import workoutRPC from './rpcs/Workout';

deepstreamInstance.set('storage', new RethinkDBStorageConnector({
  port: 28015,
  host: 'localhost',
  splitChar: '/',
  primaryKey: 'id'
}));

deepstreamClient.on('connectionStateChanged', connectionState => {
  console.log('Connection state:', connectionState);
});

deepstreamClient.on('error', ( error, event, topic ) => {
  console.error('Deepstream client error!', error, event, topic);
});

deepstreamInstance.on('started', () => {
  console.info('Deepstream server started!');

  deepstreamClient.login({
    username: 'server',
    password: 'serverPassword'
  }, (success, data) => {
    console.log('Deepstream client login:', success, data);

    if (success) {
      workoutRPC(deepstreamClient);
    }
  });
});

deepstreamInstance.start();