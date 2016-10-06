const _ = require('mori/mori');

function deconstruct(v) {
     return [ _.get(v, 0), _.get(v, 1), _.get(v, 2) ];
}

function empty() {
    return _.vector();
}

function node(tag, a, b) {
    //TODO check if formed well
    const childrenA = (typeof a === 'string') ||  Array.isArray(a) || _.isVector(a);
    const [props, children] = childrenA ? [{}, a] : [a, b];

    return _.vector(tag, _.toClj(props), _.toClj(children));
}

module.exports = { node, deconstruct, empty };
