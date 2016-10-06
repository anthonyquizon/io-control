const snabbdom = require('snabbdom/snabbdom.js');
const module_props = require('snabbdom/modules/props');
const module_class = require('snabbdom/modules/class');
const module_attrs = require('snabbdom/modules/attributes');
const module_events = require('snabbdom/modules/eventlisteners');
const module_style = require('snabbdom/modules/style');
const h = require('snabbdom/h');
const util = require('util');
const patch = snabbdom.init([ 
    module_attrs, module_class, module_props, module_events, module_style 
]);
const _ = require('mori/mori');

let domNode = null;

function toVNode(node) {
    const nonEmpty = x => x && x.length;
    const body = Array.isArray(node[2]) ? 
        node[2].filter(nonEmpty).map(toVNode) : 
        node[2];

    return h(node[0], node[1], body);
}

function run(appId, dom) {
    const vnode = toVNode(_.toJs(dom));

    domNode = patch(domNode || document.getElementById(appId), vnode);
}

module.exports = { run };
