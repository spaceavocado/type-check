/**
 * Type Check functions module.
 * All functions have a negative counter function in the namespace **not**.
 * @module spaceavocado/type-check
 */

/**
 * Is String
 * @param {mixed} value tested value
 * @return {boolean} result of the test
 */
export function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

/**
 * Is Empty
 * @param {mixed} value tested value
 * @return {boolean} result of the test
 * @throws {module:type-check.TypeCheckError} Unexpected type
 */
export function isEmpty(value) {
  // String
  if (isString(value)) {
    return value.trim().length == 0;
  }

  // Array
  if (isArray(value)) {
    return value.length == 0;
  }

  // Unexpected type
  throw new TypeCheckError(`Not supported type of check of the given value.
    Supported: String, Array`);
}

/**
 * Is Number
 * @param {mixed} value tested value
 * @return {boolean} result of the test
 */
export function isNumber(value) {
  return typeof value === 'number' && isFinite(value);
}

/**
 * Is Function
 * @param {mixed} value tested value
 * @return {boolean} result of the test
 */
export function isFunction(value) {
  return typeof value === 'function';
}

/**
 * Is Object
 * @param {mixed} value tested value
 * @return {boolean} result of the test
 */
export function isObject(value) {
  return isNullOrUndefined(value) == false
    && typeof value === 'object'
    && value.constructor === Object;
}

/**
 * Is Error
 * @param {mixed} value tested value
 * @return {boolean} result of the test
 */
export function isError(value) {
  return value instanceof Error;
}

/**
 * Is Null or Undefined
 * @param {mixed} value tested value
 * @return {boolean} result of the test
 */
export function isNullOrUndefined(value) {
  return typeof value === 'undefined' || value === null;
}

/**
 * Is Array - ES5 Array check
 * @param {mixed} value tested value
 * @return {boolean} result of the test
 */
export function isArray(value) {
  return Array.isArray(value);
}

/**
 * Is Promise
 * Basic check based on assumed presence
 * of then function on the given object.
 * @param {mixed} value tested value
 * @return {boolean} result of the test
 */
export function isPromise(value) {
  return isNullOrUndefined(value) == false
    && isFunction(value.then);
}

/**
 * Is ES6 Symbol
 * @param {mixed} value tested value
 * @return {boolean} result of the test
 */
export function isSymbol(value) {
  return typeof value === 'symbol';
}

/**
 * Is Enum Key
 * @param {string} key enum key
 * @param {object} source enum source object
 * @return {boolean} result of the test
 */
export function isEnumKey(key, source) {
  if (isObject(source) == false || isString(key) == false) {
    return false;
  }
  return source[key] !== undefined;
}

// Exported tests
const TESTS = {
  isString,
  isEmpty,
  isNumber,
  isFunction,
  isObject,
  isError,
  isNullOrUndefined,
  isArray,
  isSymbol,
  isPromise,
  isEnumKey,
};

// Exported NOT tests
const nots = {};
for (const key of Object.keys(TESTS)) {
  nots[key] = (value) => {
    return !TESTS[key](value);
  };
}
nots.isEnumKey = (key, source) => {
  return !isEnumKey(key, source);
};

/**
 * Default export - type check functions and its
 * negative counter functions in **not** property
 * @type {object}
 */
export default Object.assign({
  not: nots,
}, TESTS);

/**
 * Type Check Error
 * @external Error
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error}
 */
export class TypeCheckError extends Error {
  /**
   * @constructor
   * @param {string} message Error message
   */
  constructor(message) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, TypeCheckError);
    }
    this.constructor = TypeCheckError;
    this.__proto__ = TypeCheckError.prototype;
    this.message = message;
    this.name = this.constructor.name;
  }
}
