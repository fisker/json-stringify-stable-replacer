const isObject = (value) =>
  value &&
  !Array.isArray(value) &&
  typeof value === 'object' &&
  typeof value.toJSON !== 'function'

const sortObject = (object) =>
  Object.fromEntries(
    Object.keys(object)
      // eslint-disable-next-line unicorn/no-array-sort
      .sort()
      .map((key) => [key, object[key]]),
  )

const replacer = (_, value) => (isObject(value) ? sortObject(value) : value)

const stringify = (value, space) => JSON.stringify(value, replacer, space)

export {replacer, stringify}
