import assert from 'node:assert/strict'
import test from 'node:test'
import {stringify} from '../index.js'

// Based on https://github.com/epoberezkin/fast-json-stable-stringify/blob/49e230da2c84247b29ad4de02c9395793caefd15/test/nested.js

test('nested', () => {
  var object = {c: 8, b: [{z: 6, y: 5, x: 4}, 7], a: 3}
  assert.equal(stringify(object), '{"a":3,"b":[{"x":4,"y":5,"z":6},7],"c":8}')
})

test('cyclic (default)', () => {
  var one = {a: 1}
  var two = {a: 2, one: one}
  one.two = two
  try {
    stringify(one)
  } catch (error) {
    assert.equal(
      error.toString(),
      'RangeError: Maximum call stack size exceeded',
    )
  }
})

test('repeated non-cyclic value', () => {
  var one = {x: 1}
  var two = {a: one, b: one}
  assert.equal(stringify(two), '{"a":{"x":1},"b":{"x":1}}')
})

test('acyclic but with reused obj-property pointers', () => {
  var x = {a: 1}
  var y = {b: x, c: x}
  assert.equal(stringify(y), '{"b":{"a":1},"c":{"a":1}}')
})
