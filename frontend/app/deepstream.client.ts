const deepstream = require('deepstream.io-client-js');
let DeepstreamLocalClient;

function setupDeepstreamListeners() {
    DeepstreamLocalClient.on('error', ( error, event, topic ) => {
        DeepstreamLocalClient = undefined;
        console.error('Deepstream client error!', error, event, topic);
    });
}

export default function () {
    console.log('Deepstream local client exist:', DeepstreamLocalClient !== undefined);
    if (DeepstreamLocalClient) {
        console.log('Returning direct!');
        return Promise.resolve(DeepstreamLocalClient);
    }

    return new Promise((resolve, reject) => {
        DeepstreamLocalClient = deepstream('localhost:6020', {}).login({}, (success, err) => {
            if (err) {
                console.error('Deepstream client connection error:', err);
                reject(err);
            } else {
                console.info('Deepstream client connection success!', success);
                setupDeepstreamListeners();
                resolve(DeepstreamLocalClient);
            }
        });
    })
}