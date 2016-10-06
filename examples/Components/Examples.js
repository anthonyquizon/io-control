const Button = require('Components/Button')
const D = require('Control/Node/DOM');
const _ = require('mori/mori');

function render(model, t) {
    return D.div([
        D.div('hello'),
        Button.render(model, t)
    ]);
}

module.exports = {
    render
};
