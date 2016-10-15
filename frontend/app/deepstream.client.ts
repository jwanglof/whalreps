const deepstream = require('deepstream.io-client-js');
export const client = deepstream('localhost:6020', {}).login({}, ( success, error ) => {
    console.log(333, success, error);
});

client.on('error', ( error, event, topic ) => {
    console.error('Deepstream client error!', error, event, topic);
});
