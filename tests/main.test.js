import assert from 'node:assert/strict'
import test from 'node:test'
import {stringify} from '../index.js'

test('space', () => {
  assert.equal(stringify({a: 1}, 2), '{\n  "a": 1\n}')
})
