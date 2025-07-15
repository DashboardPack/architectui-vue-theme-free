// Empty stub to replace devtools dependencies that require birpc
module.exports = {};
module.exports.default = {};

// Common devtools-api exports
module.exports.setupDevtoolsPlugin = function() {};
module.exports.addDevtools = function() {};
module.exports.removeDevtools = function() {};
module.exports.getDevtools = function() { return []; };

// Birpc exports
module.exports.createBirpc = function() { return {}; };
module.exports.rpc = function() { return {}; };