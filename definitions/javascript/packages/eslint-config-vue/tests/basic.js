var config = require('../');
var test = require('tape');

test('Should have basic properties', function (t) {
    t.ok(isObject(config.extends));
    t.ok(isObject(config.overrides));
    t.end()
});

test('Should extend silverstripe base and vue config', function (t) {
    t.equal(config.extends.length, 1, "Extending 1 configuration");
    t.equal(config.extends[0], "plugin:vue/essential", "Using vue essential");
    t.end()
});

function isObject(obj) {
    return typeof obj === 'object' && obj !== null
}
