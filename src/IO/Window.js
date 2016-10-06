const Reconciler = require('Control/Reconciler');
const _ = require('mori/mori');

function run() {
    window.addEventListener('resize', () => {
        Reconciler.async( model => {
            return _.assoc(model, 'window', _.toClj({
                width: window.innerWidth,
                height: window.innerHeight
            }));
        });
    });
}

module.exports = {
    run: run
};
