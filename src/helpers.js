const D = require('Control/Node/DOM');
const _ = require('mori/mori');

function onMinWidth(sizes, width, xs) {
    const index = sizes.reduce((acc, s) => {
        return s < width ? s : acc;
    }, 0);

    return xs[Math.min(index, xs.length - 1)];
}

module.exports = {
    onMinWidth
};
