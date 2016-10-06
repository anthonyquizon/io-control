const Model = require('Control/Model');
const _ = require('mori/mori'), I = _.vector, O = _.hashMap;

let queue = _.queue();

const bindings = {
    'event': f => e => async(f, e),
};

function reconcile(model0, t) {
    let model1 = _.reduce((acc, fObj) => {
        const f = _.get(fObj, 'fn');
        const data = _.get(fObj, 'data');
        const result = f(model0, data);

        return Model.assocIn(acc, result);
    }, model0, queue);

    queue = _.queue();

    return model1;
}

function async(f, data) {
    const fObj = O(
        'fn', f, 'data', data
    );

    queue = _.conj(queue, fObj);
}

function bindFn(type, body) {
    const b = bindings[type];
    return b ? b(body) : body;
}

module.exports = {
    async: async,
    bindFn: bindFn,
    reconcile: reconcile
};
