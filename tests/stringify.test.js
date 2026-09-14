import assert from 'node:assert/strict'
import test from 'node:test'
import {stringify} from '../index.js'

// Based on https://github.com/epoberezkin/fast-json-stable-stringify/blob/49e230da2c84247b29ad4de02c9395793caefd15/test/str.js

test('simple object', () => {
  var object = {c: 6, b: [4, 5], a: 3, z: null}
  assert.equal(stringify(object), '{"a":3,"b":[4,5],"c":6,"z":null}')
})

test('object with undefined', () => {
  var object = {a: 3, z: undefined}
  assert.equal(stringify(object), '{"a":3}')
})

test('object with null', () => {
  var object = {a: 3, z: null}
  assert.equal(stringify(object), '{"a":3,"z":null}')
})

test('object with NaN and Infinity', () => {
  var object = {a: 3, b: NaN, c: Infinity}
  assert.equal(stringify(object), '{"a":3,"b":null,"c":null}')
})

test('array with undefined', () => {
  var object = [4, undefined, 6]
  assert.equal(stringify(object), '[4,null,6]')
})

test('object with empty string', () => {
  var object = {a: 3, z: ''}
  assert.equal(stringify(object), '{"a":3,"z":""}')
})

test('array with empty string', () => {
  var object = [4, '', 6]
  assert.equal(stringify(object), '[4,"",6]')
})
