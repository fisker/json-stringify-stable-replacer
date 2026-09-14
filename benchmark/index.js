import assert from 'node:assert/strict'
import fastJsonStableStringify from 'fast-json-stable-stringify'
import jsonSortedStringify from 'json-sorted-stringify'
import {Bench} from 'tinybench'
import {stringify} from '../index.js'
import data from './test.json' with {type: 'json'}

const expected = stringify(data)

const bench = new Bench({})

for (let {name, fn: function_} of [
  {name: 'json-stringify-stable-replacer', fn: stringify},
  {name: 'JSON.stringify', fn: JSON.stringify},
  {name: 'fast-json-stable-stringify', fn: fastJsonStableStringify},
  {name: 'json-sorted-stringify', fn: jsonSortedStringify},
]) {
  if (name !== 'JSON.stringify') {
    assert.equal(function_(data), expected, name)
  }
  bench.add(name, () => function_(data))
}

console.log()
await bench.run()
console.table(bench.table())
