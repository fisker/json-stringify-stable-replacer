# json-stringify-stable-replacer

[![Npm Version][package_version_badge]][package_link]
[![MIT License][license_badge]][license_link]
[![Coverage][coverage_badge]][coverage_link]

[coverage_badge]: https://img.shields.io/codecov/c/github/fisker/json-stringify-stable-replacer.svg?style=flat-square
[coverage_link]: https://app.codecov.io/gh/fisker/json-stringify-stable-replacer
[license_badge]: https://img.shields.io/npm/l/json-stringify-stable-replacer.svg?style=flat-square
[license_link]: https://github.com/fisker/json-stringify-stable-replacer/blob/main/license
[package_version_badge]: https://img.shields.io/npm/v/json-stringify-stable-replacer.svg?style=flat-square
[package_link]: https://www.npmjs.com/package/json-stringify-stable-replacer

> Stable JSON stringify.

## Install

```bash
yarn add json-stringify-stable-replacer
```

## Usage

```js
import {stringify} from 'json-stringify-stable-replacer'

stringify({a: 1, b: 2}) // => '{"a":1,"b":2}'
stringify({b: 2, a: 1}) // => '{"a":1,"b":2}'
```
