const Reconciler = require('Control/Reconciler');
const Model = require('Control/Model');
const C = require('Control/Node/Component');
const N = require('Control/Node/Core');
const _ = require('mori/mori');

const updateFns = [
    [C.isComponent, parseComponent],
    [_.isVector, parseIterables],
    [hasEvents, parseProps],
    [() => true, (_a, _b, x) => x]
];

function hasEvents(x) {
    return _.isMap(x) && !_.isEmpty(_.get(x, 'on'));
}

function parseProps(_model, paths, props) {
    const events = _.map(p => {
        const ev = _.get(p, 0);
        const evBody = _.get(p, 1);

        if (typeof evBody === 'function') {
            return p;
        }
        else {
            const type = _.get(evBody, 0);
            const body = _.get(evBody, 1);

            return _.vector(ev, Reconciler.bindFn(type, paths, body));
        }
    }, _.get(props, 'on'));

    return _.assoc(props, 'on', _.into(_.hashMap(), events));
}

function parseIterables(model, paths, renderables) {
    return _.map(x => {
        const [__, f] = updateFns.find(([p, __]) => p(x));
        
        return f(model, paths, x);
    }, renderables);
}

function parseComponent(model, _paths, vec) {
    //TODO model and props equality cache

    const [c, props, children] = N.deconstruct(vec);
    const [paths, cModel] = _.getIn(c, ['model', 'paths']) ? 
        Model.query(model, _.getIn(c, ['model', 'paths']), props) : 
        [_.hashMap(), model];
    const renderables = _.get(c, 'render')(cModel, props, children);
    //TODO set paths of children before Component parse

    return parseIterables(model, paths, renderables);
}

module.exports = { 
    parseComponent 
};

