const D = require('Control/Node/DOM');
const _ = require('mori/mori');

function render(model, t) {
    const svgProps = {
        style: {
            'transform-orign': '50%'
        },
        attrs: {
            'width': '100',
            'height': '100',
            'viewbox': '0 0 100 100'
        }
    };
    const gProps = {
        attrs: {
            transform: 'translate(50, 50)'
        }
    };
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

    return D.svg(svgProps, [
            D.g(gProps, [
                D.circle(circleProps, []),
                //D.text(t + '')
            ])
    ]);
}

module.exports = {
    render
};

