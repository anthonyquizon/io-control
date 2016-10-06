const Tree = require('Control/Tree');
const IORenderer = require('IO/Renderer');
const IOWindow = require('IO/Window');
const IOGeolocation = require('IO/Geolocation');
const Reconciler = require('Control/Reconciler');
const _ = require('mori/mori');


//TODO send model history? vector of all previous states
function run(Component, initial) {
    IOWindow.run();
    IOGeolocation.run();

    (function step(model0, t, initial) {
        const model1 = Reconciler.reconcile(model0, t);

        if (initial || !_.equals(model1, model0)) {
            const dom = Tree.parseComponent(model1, _.hashMap(), Component['+']());
            IORenderer.run('app', dom);
        }

        requestAnimationFrame((t) => { 
            step(model1, t, false); 
        });
    }(initial, 0, true));
}

module.exports = { run };

