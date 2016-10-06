const D = require('Control/Node/DOM');
const _ = require('mori/mori');

function render(model) {
    const circleProps = {
        style: {
            'fill': 'blue'
        },
        attrs: {
            r: 30,
            cx: 10,
            cy: 10
        }
    };
    return D.svg([
            D.circle(circleProps, [])
    ]);
}

module.exports = {
    render
};
