var config = require('../');
var test = require('tape');

test('Should have basic properties', function (t) {
    t.ok(isObject(config.extends));
    t.ok(isObject(config.env));
    t.equal(Object.keys(config).length, 2);
    t.end()
});

test('Should extend airbnb config', function (t) {
    t.equal(config.extends.length, 1);
    t.equal(config.extends[0], "airbnb-base");
    t.end()
});

test('Should have the env configs', function (t) {
    t.equal(Object.keys(config.env).length, 5);
    t.ok(config.env.browser);
    t.ok(config.env.commonjs);
    t.ok(config.env.es6);
    t.ok(config.env.jest);
    t.ok(config.env.node);
    t.end()
});

function isObject(obj) {
    return typeof obj === 'object' && obj !== null
}
