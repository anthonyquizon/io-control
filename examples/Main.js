const Runner = require('Control/Runner');
const Component = require('Components/Examples');
const _ = require('mori/mori');

const model = _.toClj({
    sizes: [0, 750, 1200],
    window: {
        width: window.innerWidth,
        height: window.innerHeight
    }
});

Runner.run(Component, model);
