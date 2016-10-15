const DeepstreamServer = require('deepstream.io');
const deepstreamClient = require('deepstream.io-client-js')('localhost:6021', {});

const deepstreamInstance = new DeepstreamServer({});

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
  }, deepstreamLogin);
});

deepstreamInstance.start();

function deepstreamLogin(success, data) {
  console.log('Deepstream client login:', success, data);

  if (success) {
    deepstreamClient.rpc.provide('create:workout', ( data, response ) => {
      console.log(1111, data);
      response.send({success: 'JUPP!'});
    });
  }
}