'use strict';


module.exports = require('./configs/backend');
// atom eslint cannot load plugins unless the config file is in node_modules,
// so remove our eslint-plugin-import's rules from config
delete module.exports.extends[1];
delete module.exports.rules['import/no-extraneous-dependencies'];
delete module.exports.rules['import/no-unresolved'];
delete module.exports.rules['async-series'];
delete module.exports.rules['capitalized-require-var'];
delete module.exports.rules['lowercase-require-param'];
