const deepstream = require('deepstream.io-client-js');
export const client = deepstream('localhost:6020', {}).login({}, ( success, error ) => {
    if (error) {
        console.error('Deepstream client connection error:', error);
    } else {
        console.info('Deepstream client connection success!');
    }
});

client.on('error', ( error, event, topic ) => {
    console.error('Deepstream client error!', error, event, topic);
});
