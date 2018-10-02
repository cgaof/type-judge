'use strict';

require('mocha');
var assert = require('assert');
var judeg = require('./');

describe('judeg', function() {
    it('should return the array type:', function() {
        assert.deepEqual(judeg.isArray(['a', 'b', 'c']), true);
    });
    it('should return the number type:', function() {
        assert.deepEqual(judeg.isNumber(6), true);
    });
    it('should return the string type:', function() {
        assert.deepEqual(judeg.isString('a'), true);
    });
    it('should return the object type:', function() {
        assert.deepEqual(judeg.isObject({}), true);
    });    
  });
  