const Reconciler = require('Control/Reconciler');

function getLocation() {
    //TODO update position
    if (navigator.geolocation && initial) {
        navigator.geolocation.getCurrentPosition(position => {
            loc = {
                lat: position && position.coords.latitude,
                lng: position && position.coords.longitude
            };
            
            //TODO async
        });
    }
}

function run() {
    //TODO
}

module.exports = {
    run: run
};
