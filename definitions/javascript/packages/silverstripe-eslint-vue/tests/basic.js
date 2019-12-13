var config = require('../');
var test = require('tape');

test('Should have basic properties', function (t) {
    t.ok(isObject(config.extends));
    t.ok(isObject(config.overrides));
    t.end()
});

test('Should extend silverstripe base and vue config', function (t) {
    t.equal(config.extends.length, 2, "Extending 2 configurations");
    t.equal(config.extends[0], "silverstripe-eslint-base","Using silverstripe base");
    t.equal(config.extends[1], "plugin:vue/essential", "Using vue essential");
    t.end()
});

function isObject(obj) {
    return typeof obj === 'object' && obj !== null
}
