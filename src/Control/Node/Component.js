const N = require('Control/Node/Core');
const _ = require('mori/mori');

function isComponent(x) {
    return _.isVector(x) && !!_.getIn(x, [0, 'render']);
}

function get(C, path) {
    return _.getIn(C, path);
}

function Component(C0) {
    const C1 = _.toClj(C0);

    return {
        '+': (a, b) => N.node(C1, a, b), //TODO make lazy
    };
}

module.exports = { 
    isComponent, 
    Component
};
