const Runner = require('Control/Runner');
const Component = require('Components/App');
const _ = require('mori/mori');

const model = _.toClj({});

Runner.run(Component, _.merge(dataI, model));
