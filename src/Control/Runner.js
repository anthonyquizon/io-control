const IORenderer = require('IO/Renderer');
const IOWindow = require('IO/Window');
const Reconciler = require('Control/Reconciler');
const _ = require('mori/mori');


//TODO send model history? vector of all previous states
function run(Component, initial) {
    IOWindow.run();

    (function step(model0, t, initial) {
        const model1 = Reconciler.reconcile(model0, t);
        const dom = Component.render(model1, t);
        IORenderer.run('app', dom);

        requestAnimationFrame((t) => { 
            step(model1, t, false); 
        });
    }(initial, 0, true));
}

module.exports = { run };

