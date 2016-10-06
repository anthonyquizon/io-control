const Button = require('Components/Button')
const D = require('Control/Node/DOM');
const _ = require('mori/mori');

function render() {
    return D.div([
        D.div('hello'),
        Button.render()
    ]);
}

module.exports = {
    render
};
