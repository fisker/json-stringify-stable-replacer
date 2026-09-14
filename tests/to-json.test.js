import assert from 'node:assert/strict'
import test from 'node:test'
import {stringify} from '../index.js'

// Based on https://github.com/epoberezkin/fast-json-stable-stringify/blob/49e230da2c84247b29ad4de02c9395793caefd15/test/to-json.js

test('toJSON function', () => {
  var object = {
    one: 1,
    two: 2,
    toJSON: function () {
      return {one: 1}
    },
  }
  assert.equal(stringify(object), '{"one":1}')
})

test('toJSON returns string', () => {
  var object = {
    one: 1,
    two: 2,
    toJSON: function () {
      return 'one'
    },
  }
  assert.equal(stringify(object), '"one"')
})

test('toJSON returns array', () => {
  var object = {
    one: 1,
    two: 2,
    toJSON: function () {
      return ['one']
    },
  }
  assert.equal(stringify(object), '["one"]')
})
